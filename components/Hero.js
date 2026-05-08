import React from 'react'
import Image from "next/image";
import style from "@/styles/home.module.css"

export default function Hero() {
  return (
    <div className="relative w-full h-137.5 md:h-162.5 lg:h-187.5 overflow-hidden">
      <Image src="/hero1.jpg" alt="hero" fill className="object-cover" priority />
      
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto h-full relative">
          <div className={style.divInfo}>
            <h1 className={style.title}>
              Explore The <span className={style.header}>World</span> Now
            </h1>
            <p className={style.description}>
              Our team of experienced travel experts will help you plan your trip 
              from start to finish, ensuring your dream vacation becomes a reality. 
              Don&#39;t wait any longer, book your trip!
            </p>
            <button className="mt-10 bg-[#D57C48] text-white px-8 py-3 rounded-md font-bold hover:bg-[#b8663a] transition-all">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}