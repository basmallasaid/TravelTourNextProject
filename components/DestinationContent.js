"use client";
import { useState } from "react";
import { 
  PlusIcon, 
  MinusIcon, 
  UserIcon, 
  EnvelopeIcon, 
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";
import { createBooking } from "../API/bookingApi";
import Swal from "sweetalert2"; 

export default function DestinationContent({ data }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [insurance, setInsurance] = useState(false);
  const [message, setMessage] = useState("");

  const adultPrice = data?.price || 490;
  const totalAmount = adults * adultPrice + children * 300 + (insurance ? 220 : 0);

  const handleRequest = async () => {
    if (!fullName || !email || !date) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in your name, email, and travel date to continue.",
        confirmButtonColor: "#d97d4a",
      });
      return;
    }

    const bookingData = {
      customerName: fullName,
      customerEmail: email,
      tourTitle: data?.title || "Chiang Mai",
      date,
      adults,
      children,
      insurance,
      message,
      total: totalAmount,
    };

    try {
      await createBooking(bookingData);
      
      Swal.fire({
        icon: "success",
        title: "Request Sent!",
        text: `Thank you ${fullName}. Your booking request has been received successfully.`,
        confirmButtonColor: "#d97d4a",
        timer: 3000,
        timerProgressBar: true,
      });

     
      setFullName("");
      setEmail("");
      setDate("");
      setMessage("");
      setAdults(1);
      setChildren(0);
      setInsurance(false);

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
        confirmButtonColor: "#d97d4a",
      });
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 bg-white relative z-10 py-12 px-6 lg:px-16">
      
      <div className="lg:col-span-2 text-left">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Enjoy the Adventure</h2>
          <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
            <p>Are you looking for an adventure of a lifetime? Join us on an unforgettable journey through the heart of the most beautiful landscapes.</p>
            <p>Our itineraries are designed to immerse you in the local culture, with opportunities to <span className="text-[#d97d4a] font-bold underline decoration-2 underline-offset-4 cursor-pointer">learn about the history and traditions</span> of each destination.</p>
          </div>
          <div className="h-px bg-gradient-to-r from-gray-200 to-transparent w-full mt-12"></div>
        </div>

        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Included / Excluded</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="flex items-center gap-3 text-gray-600 font-medium">
                <CheckBadgeIcon className="h-6 w-6 text-green-500"/> Professional Local Guide
             </div>
             <div className="flex items-center gap-3 text-gray-600 font-medium">
                <CheckBadgeIcon className="h-6 w-6 text-green-500"/> Luxury Transport
             </div>
          </div>
        </div>
      </div>

    
      <div className="lg:col-span-1">
        <div className="bg-white rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 p-8 sticky top-28 overflow-hidden">
          
          <div className="flex justify-between items-start mb-10">
            <div className="text-left">
              <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mb-1">Price starts from</p>
              <h3 className="text-2xl font-black text-gray-900">Reserve Spot</h3>
            </div>
            <div className="flex items-start">
              <span className="text-[#d97d4a] text-xl font-bold mt-1 mr-1">$</span>
              <span className="text-5xl font-black text-gray-900 leading-none">{data?.price || 490}</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-left">
               <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Destination ID</p>
               <p className="text-sm font-bold text-gray-600">{data?.title || 'Chiang Mai'} — #5071</p>
            </div>

            <div className="relative">
              <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Name & Surname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#d97d4a]/20 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#d97d4a]/20 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="relative">
              <CalendarDaysIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#d97d4a]" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm text-gray-600 focus:ring-2 focus:ring-[#d97d4a]/20 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 py-2">
               <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">Adults</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => adults > 1 && setAdults(adults - 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-all"><MinusIcon className="h-3 w-3"/></button>
                    <span className="font-black text-lg">{adults}</span>
                    <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-all"><PlusIcon className="h-3 w-3"/></button>
                  </div>
               </div>
               <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase mb-2">Children</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => children > 0 && setChildren(children - 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-all"><MinusIcon className="h-3 w-3"/></button>
                    <span className="font-black text-lg">{children}</span>
                    <button onClick={() => setChildren(children + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-100 transition-all"><PlusIcon className="h-3 w-3"/></button>
                  </div>
               </div>
            </div>

            <div className="relative">
              <ChatBubbleBottomCenterTextIcon className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <textarea
                placeholder="Any special requests or questions?"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#d97d4a]/20 outline-none transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-3 px-2 pt-2">
              <input
                type="checkbox"
                checked={insurance}
                onChange={(e) => setInsurance(e.target.checked)}
                className="w-5 h-5 rounded-lg border-gray-300 text-[#d97d4a] focus:ring-[#d97d4a] cursor-pointer"
              />
              <span className="text-sm font-bold text-gray-600">Include Travel Insurance (+ $220)</span>
            </div>

            <button
              onClick={handleRequest}
              className="w-full bg-[#d97d4a] hover:bg-gray-900 text-white font-black py-5 rounded-[22px] mt-6 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_12px_24px_-8px_rgba(217,125,74,0.4)] active:scale-95"
            >
              SEND REQUEST — ${totalAmount}
            </button>
            
            <p className="text-[10px] text-gray-400 font-medium text-center mt-4">
              * This is a non-binding request. Our team will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}