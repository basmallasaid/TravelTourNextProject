"use client";
import { useState } from "react";
export default function BookingForm({ tour }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    guests: 1,
  });
  const totalPrice = formData.guests * (tour?.price || 0);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const bookingData = {
    ...formData,
    tourTitle: tour?.title,
    price: totalPrice,
  };

  try {
   
    const res = await fetch(process.env.NEXT_PUBLIC_APIURLBOOKINGS, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

      const data = await res.json();

      console.log(data);

      alert("Booking Added Successfully");

      setFormData({
        fullName: "",
        email: "",
        date: "",
        guests: 1,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 max-w-4xl mx-auto">
      <div className="mb-10 text-center md:text-left">
        <h3 className="text-3xl font-black text-[#1e2a5e] mb-2">Book Your Trip</h3>
        <p className="text-gray-400">Please fill the form below to confirm your slot for <span className="text-[#d97d4a] font-bold">{tour?.title}</span>.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#1e2a5e] uppercase tracking-wider">Full Name</label>
            <input
              required
              type="text"
              value={formData.fullName}
              placeholder="Basmala said"
              className="p-5 bg-gray-50 rounded-2xl outline-none border border-transparent focus:border-[#d97d4a] focus:bg-white transition-all text-gray-700"
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#1e2a5e] uppercase tracking-wider">Email Address</label>
            <input
              required
              type="email"
              value={formData.email}
              placeholder="example@mail.com"
              className="p-5 bg-gray-50 rounded-2xl outline-none border border-transparent focus:border-[#d97d4a] focus:bg-white transition-all text-gray-700"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#1e2a5e] uppercase tracking-wider">Select Date</label>
            <input
              required
              type="date"
              value={formData.date}
              className="p-5 bg-gray-50 rounded-2xl outline-none border border-transparent focus:border-[#d97d4a] focus:bg-white transition-all text-gray-700"
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#1e2a5e] uppercase tracking-wider">Number of Guests</label>
            <div className="relative">
              <input
                type="number"
                min="1"
                value={formData.guests}
                className="w-full p-5 bg-gray-50 rounded-2xl outline-none border border-transparent focus:border-[#d97d4a] focus:bg-white transition-all text-gray-700"
                onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) || 1 })}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#1e2a5e] p-8 md:p-10 rounded-[30px] text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>

          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-2">Total Payable Amount</p>
            <p className="text-5xl font-black text-[#d97d4a]">${totalPrice}</p>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-[#d97d4a] hover:bg-[#c46a3b] text-white px-12 py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg shadow-orange-900/20"
          >
            CONFIRM BOOKING
          </button>
        </div>
      </form>
    </div>
  );
}