import React from 'react'
import Image from "next/image";
import Link from "next/link"; 
// import { ClockIcon, MapPinIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/outline";
export default function CardDest({ packagesData }) {
  return (
    <>
       <section className="relative w-full overflow-hidden px-6 lg:px-24 flex flex-col  py-20 mb-9">
            <div className="absolute inset-0 pointer-events-none w-10/11 h-full">
              <Image src="/para2.jpg"  alt="Compass Background" fill className="object-contain object-top "/>
            </div>
      
            <div className="relative z-10 mt-10">
              <div className="max-w-3xl mb-16">
                <p className="text-[#d97d4a] text-2xl italic mb-5" style={{ fontFamily: 'cursive' }}>
                  Next Adventure
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight">
                  Travel Destinations <br /> Available Worldwide
                </h2>
                <p className="text-gray-500 leading-relaxed max-w-2xl">
                  We have compiled a list of top destinations across the globe, scoured the world 
                  for the most alluring and fascinating places to visit. From the beautiful beaches 
                  of the Caribbean to the majestic mountains of Europe.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
            {packagesData?.map((pkg) => (
              <div 
                key={pkg.id}  className="relative h-112.5 rounded-[40px] overflow-hidden group cursor-pointer shadow-lg mt-8" 
                >
                <Link 
                  href={`/destinations/${pkg.slug}`}  className="absolute inset-0 z-30" aria-label={`View details for ${pkg.title}`}
                />
                <Image 
                  src={pkg.image} alt={pkg.title} fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end p-8 text-center pointer-events-none z-20">
                  <h4 className="text-white text-3xl font-black mb-3 drop-shadow-md">
                    {pkg.title}
                  </h4>
                  <p className="text-white/90 text-sm font-medium leading-relaxed max-w-md">
                    {pkg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
            </div>
          </section>
    </>
  )
}
