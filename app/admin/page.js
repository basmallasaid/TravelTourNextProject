"use client";
import { useEffect, useState } from "react";
import { deleteBooking, getBookings, updateBooking } from "@/API/bookingApi";
import { 
  TrashIcon, 
  PencilSquareIcon, 
  CheckIcon, 
  XMarkIcon, 
  EnvelopeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CalendarIcon
} from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import Image from "next/image";

export default function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => { fetchBookings(); }, []);

  const fetchBookings = async () => {
    try {
      const data = await getBookings();
      setBookings(data);
      setLoading(false);
    } catch (error) { console.error(error); }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d97d4a",
      cancelButtonColor: "#1a2b49",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBooking(id);
        setBookings(bookings.filter((b) => b.id !== id));
        Swal.fire({ title: "Deleted!", icon: "success", confirmButtonColor: "#d97d4a" });
      }
    });
  };

  const handleSaveUpdate = async (id) => {
    try {
      await updateBooking(id, editData);
      setBookings(bookings.map((b) => (b.id === id ? editData : b)));
      setEditingId(null);
      Swal.fire({ icon: "success", title: "Updated!", timer: 1500, showConfirmButton: false });
    } catch (error) {
      Swal.fire("Error", "Failed to update", "error");
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-black text-2xl text-[#d97d4a]">LOADING PANEL...</div>;

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section - نفس ستايل الصفحات التانية */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image src="/blog.jpg" alt="admin" fill className="object-cover brightness-[0.3]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest">Admin Dashboard</h1>
          <p className="mt-4 text-gray-300 font-medium tracking-wide">Manage your tour bookings and customers</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 pb-20">
        
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-8 rounded-[30px] shadow-xl border border-gray-100 flex items-center gap-6">
            <div className="bg-orange-50 p-4 rounded-2xl"><UserGroupIcon className="h-8 w-8 text-[#d97d4a]"/></div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Bookings</p>
              <h3 className="text-2xl font-black">{bookings.length}</h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[30px] shadow-xl border border-gray-100 flex items-center gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl"><CurrencyDollarIcon className="h-8 w-8 text-blue-600"/></div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Revenue</p>
              <h3 className="text-2xl font-black">${bookings.reduce((acc, b) => acc + (Number(b.total) || 0), 0)}</h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[30px] shadow-xl border border-gray-100 flex items-center gap-6">
            <div className="bg-green-50 p-4 rounded-2xl"><CalendarIcon className="h-8 w-8 text-green-600"/></div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Status</p>
              <h3 className="text-2xl font-black text-green-600">Active</h3>
            </div>
          </div>
        </div>

        {/* Main Table Container */}
        <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50 bg-white flex justify-between items-center">
            <h2 className="text-2xl font-black text-gray-900">Recent Reservations</h2>
            <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-500 border border-gray-100">
              {new Date().toLocaleDateString()}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Customer Information</th>
                  <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Destination</th>
                  <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Travel Date</th>
                  <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Amount</th>
                  <th className="p-6 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50/30 transition-all group">
                    
                    {/* Customer Info */}
                    <td className="p-6">
                      {editingId === booking.id ? (
                        <div className="flex flex-col gap-2 max-w-[200px]">
                          <input 
                            className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#d97d4a]/20"
                            value={editData.customerName}
                            onChange={(e) => setEditData({...editData, customerName: e.target.value})}
                          />
                          <input 
                            className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#d97d4a]/20"
                            value={editData.customerEmail}
                            onChange={(e) => setEditData({...editData, customerEmail: e.target.value})}
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <span className="font-black text-gray-900 text-lg">{booking.customerName}</span>
                          <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mt-1">
                            <EnvelopeIcon className="h-3.5 w-3.5" /> {booking.customerEmail}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Destination */}
                    <td className="p-6">
                      <div className="inline-block bg-blue-50 text-[#1a2b49] px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-tighter">
                        {booking.tourTitle}
                      </div>
                    </td>

                    {/* Date */}
                    <td className="p-6">
                      {editingId === booking.id ? (
                        <input 
                          type="date"
                          className="p-3 bg-gray-50 border-none rounded-xl text-sm outline-none"
                          value={editData.date}
                          onChange={(e) => setEditData({...editData, date: e.target.value})}
                        />
                      ) : (
                        <span className="text-gray-500 font-bold text-sm italic">{booking.date}</span>
                      )}
                    </td>

                    {/* Total Amount */}
                    <td className="p-6">
                      <span className="text-2xl font-black text-gray-900 tracking-tighter">
                        <small className="text-xs text-[#d97d4a] mr-1">$</small>
                        {booking.total}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        {editingId === booking.id ? (
                          <>
                            <button onClick={() => handleSaveUpdate(booking.id)} className="p-2 bg-green-500 text-white rounded-xl shadow-lg shadow-green-100 hover:scale-110 transition-transform">
                              <CheckIcon className="h-5 w-5"/>
                            </button>
                            <button onClick={() => setEditingId(null)} className="p-2 bg-red-500 text-white rounded-xl shadow-lg shadow-red-100 hover:scale-110 transition-transform">
                              <XMarkIcon className="h-5 w-5"/>
                            </button>
                          </>
                        ) : (
                          <>
                            <button 
                              onClick={() => {setEditingId(booking.id); setEditData(booking);}} 
                              className="p-3 bg-white border border-gray-100 rounded-2xl text-blue-500 hover:bg-blue-50 hover:border-blue-100 transition-all shadow-sm"
                            >
                              <PencilSquareIcon className="h-5 w-5"/>
                            </button>
                            <button 
                              onClick={() => handleDelete(booking.id)} 
                              className="p-3 bg-white border border-gray-100 rounded-2xl text-red-400 hover:bg-red-50 hover:border-red-100 transition-all shadow-sm"
                            >
                              <TrashIcon className="h-5 w-5"/>
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {bookings.length === 0 && (
              <div className="p-20 text-center">
                <p className="text-gray-400 font-bold text-lg italic">No reservations found in the database.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}