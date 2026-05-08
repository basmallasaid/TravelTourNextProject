import React from 'react'
import Image from "next/image";
import Link from "next/link"; 
import { ClockIcon, MapPinIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/outline";
export default function Card({ packagesData }) {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6 lg:px-20 mt-5 mb-9">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packagesData?.map((pkg) => (
                        <div key={pkg.id} className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col">
                            <div className="relative h-72 w-full">
                                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                                {pkg.isSale && (
                                    <span className="absolute top-4 right-4 bg-[#d97d4a] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                        Sale
                                    </span>
                                )}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-3 flex justify-between items-center z-10 border border-gray-50">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <ClockIcon className="h-4 w-4 text-[#d97d4a]" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <EnvelopeIcon className="h-4 w-4 text-[#d97d4a]" />
                                        <MapIcon className="h-4 w-4 text-[#d97d4a]" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-8 pt-12 pb-8 grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                                <div className="flex items-center gap-1 text-gray-400 text-sm mb-6">
                                    <MapPinIcon className="h-4 w-4 text-[#d97d4a]" />
                                    <span>{pkg.location}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed border-b border-gray-100 pb-8 line-clamp-3">
                                    {pkg.description}
                                </p>
                                <div className="mt-6 flex justify-between items-end">
                                    <Link href={`/destinations/${pkg.slug}`}>
                                        <button className="bg-[#d97d4a] text-white px-7 py-2.5 rounded-lg text-sm font-bold hover:bg-[#c46a3b] transition-colors">
                                            Details
                                        </button>
                                    </Link>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-[11px] font-medium mb-1 uppercase tracking-tight">From</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-black text-gray-900">${pkg.price}</span>
                                            {pkg.oldPrice && (
                                                <span className="text-gray-300 line-through text-sm">${pkg.oldPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </>
  )
}
