"use client";
import { useState, useEffect } from "react";
import NextImage from "next/image"; 
import Link from "next/link"; 
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function SearchFilter({ packagesData }) {
  const [filteredData, setFilteredData] = useState(packagesData);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [onlySale, setOnlySale] = useState(false);

  useEffect(() => {
    let result = packagesData.filter((item) => {
      const matchSearch = 
        item.title?.toLowerCase().includes(search.toLowerCase()) ||
        item.location?.toLowerCase().includes(search.toLowerCase());
      const matchPrice = maxPrice ? Number(item.price) <= Number(maxPrice) : true;
      const matchDuration = duration ? item.duration?.includes(duration) : true;
      const matchSale = onlySale ? item.isSale === true : true;

      return matchSearch && matchPrice && matchDuration && matchSale;
    });
    setFilteredData(result);
  }, [search, maxPrice, duration, onlySale, packagesData]);

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      
      {/* Filter Bar */}
      <div className="bg-white p-8 rounded-[30px] shadow-2xl -mt-16 relative z-20 border border-gray-100 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          
          {/* Destination Search */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Destination</label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#d97d4a]" />
              <input
                type="text"
                placeholder="Italy, Toscany..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#d97d4a]/20 outline-none"
              />
            </div>
          </div>

          {/* Max Price */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Max Price ($)</label>
            <input
              type="number"
              placeholder="Budget limit"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#d97d4a]/20 outline-none"
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Duration (Days)</label>
            <input
              type="number"
              placeholder="e.g. 5"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#d97d4a]/20 outline-none"
            />
          </div>

          {/* Sale Toggle */}
          <div className="flex items-center gap-3 pb-3 px-2">
            <input
              type="checkbox"
              id="sale"
              checked={onlySale}
              onChange={(e) => setOnlySale(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-[#d97d4a] focus:ring-[#d97d4a] accent-[#d97d4a]"
            />
            <label htmlFor="sale" className="text-sm font-bold text-gray-600 cursor-pointer">Special Offers</label>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
            <p className="text-sm text-gray-400 font-medium text-left">
              Found <span className="text-[#d97d4a] font-black">{filteredData.length}</span> packages
            </p>
            <button 
                onClick={() => {setSearch(""); setMaxPrice(""); setDuration(""); setOnlySale(false);}}
                className="text-xs font-bold text-[#d97d4a] uppercase tracking-widest hover:text-black transition-colors"
            >
                Reset Filters
            </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredData.length > 0 ? (
          filteredData.map((pkg) => (
            <Link 
              href={`/destinations/${pkg.slug}`} 
              key={pkg.id} 
              className="bg-white rounded-[35px] overflow-hidden shadow-xl border border-gray-100 group transition-all hover:-translate-y-2 cursor-pointer block"
            >
              <div className="relative h-72">
                  <NextImage 
                    src={pkg.image || "/blog.jpg"} 
                    alt={pkg.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm text-gray-900 font-black">
                      <span className="text-[#d97d4a] text-xs mr-0.5">$</span>{pkg.price}
                  </div>
                  
                  {pkg.isSale && (
                    <div className="absolute top-5 left-5 bg-[#d97d4a] text-white px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                        On Sale
                    </div>
                  )}
              </div>
              
              <div className="p-8 text-left">
                  <div className="flex items-center gap-1.5 text-[#d97d4a] mb-2">
                    <MapPinIcon className="h-4 w-4"/>
                    <span className="text-[11px] font-black uppercase tracking-widest">{pkg.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#d97d4a] transition-colors leading-tight">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6 font-medium">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-tighter">
                        <ClockIcon className="h-4 w-4 text-gray-400"/>
                        {pkg.duration}
                    </div>
                    <span className="text-[10px] font-black text-[#d97d4a] uppercase underline decoration-2 underline-offset-4">Details</span>
                  </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-32 text-center bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
             <AdjustmentsHorizontalIcon className="h-20 w-20 text-gray-200 mx-auto mb-4" />
             <h3 className="text-2xl font-black text-gray-900">No matching tours</h3>
             <p className="text-gray-400 mt-2">Try changing your search or price range.</p>
          </div>
        )}
      </div>
    </div>
  );
}