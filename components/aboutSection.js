import Image from "next/image";
import Link from "next/link"; 
import { ClockIcon, MapPinIcon, EnvelopeIcon, MapIcon ,MagnifyingGlassIcon, ChevronDownIcon, CogIcon } from "@heroicons/react/24/outline";
import Card from "./Card";
export default function AboutSection({ packagesData }) {
    const tours = [
  {
    id: 1,
    title: "City Walks Tour",
    bgImage: "/banner-01.jpg", 
    icon: "/icon-001.gif",
  },
  {
    id: 2,
    title: "Electric Bikes",
    bgImage: "/banner-02.jpg",
    icon: "/icon-002.gif",        
  },
  {
    id: 3,
    title: "Skyscrapers View",
    bgImage: "/banner-05.jpg",
    icon: "/icon-003.gif",      
  }
];
const destinations = [
  {
    title: "U.S.A",
    description: "Here is filled with diverse cultures & cities",
    image: "/dest1.jpg", 
  },
  {
    title: "Japan",
    description: "The top culture of the Land of the Rising Sun",
    image: "/dest2.jpg",
  },
  {
    title: "California",
    description: "Explore the vibrant and natural cities",
    image: "/dest3.jpg",
  },
  {
    title: "Italy",
    description: "Taste the cuisine and all charming cities",
    image: "/dest4.jpg",
  },
];
  return (
    <div className="mt-15">
    <section className="relative w-full min-h-150 flex items-center bg-white overflow-hidden px-6 lg:px-24 ">
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-40 pointer-events-none">
        <Image src="/map3.png" alt="World Map Background" fill className="object-contain object-right" priority/>
      </div>
      <div className="relative z-10 max-w-2xl">
        <p className="text-[#d97d4a] text-2xl mb-4 italic font-serif" style={{ fontFamily: 'cursive' }}>
          Dream Vacation Destination
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
          Plan the Trip of a Lifetime with Ease
        </h2>
        <p className="text-gray-500 text-l leading-relaxed mb-8 max-w-2xl">
          Whether you&#39;re looking for a romantic getaway, a family-friendly adventure, or a 
          solo journey to explore the world, a travel agency can provide you with a 
          custom-tailored itinerary that exceeds your expectations.
        </p>
        <button className="bg-[#d97d4a] text-white px-10 py-4 rounded-md font-bold text-sm shadow-lg hover:bg-[#c46a3b] transition-all">
          More Info
        </button>
      </div>
    </section>

   <section className="px-6 py-12 lg:px-20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div  key={tour.id}  className="relative h-48 md:h-42 rounded-2xl overflow-hidden group cursor-pointer">
            <Image src={tour.bgImage} alt={tour.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="relative z-10 h-full flex items-center px-6 gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
               <Image src={tour.icon} alt="icon"  width={60}height={60} className="object-contain filter brightness-0 invert" />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight max-w-55">
                {tour.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Card packagesData={packagesData}/>

  <section className="relative w-full min-h-170 bg-[#fbf5f0] overflow-hidden px-6 lg:px-24 flex flex-col items-center justify-center py-20 mt-10">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image  src="/para.jpg"  alt="Background Map"  fill className="object-cover" priority/>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <p className="text-[#d97d4a] text-2xl italic mb-4" style={{ fontFamily: 'cursive' }}>
          Choose your Trip
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-black mb-8">
          Start your Vacation Now
        </h2>
        <p className="text-gray-500 text-l leading-relaxed mb-16 max-w-3xl">
          Looking for your dream vacation destination but don&#39;t know where to start? With the help of 
          experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.
        </p>
      </div>
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-0">
        <div className="flex-1 flex items-center gap-4 px-6 border-b md:border-b-0 md:border-r border-gray-100 w-full md:w-auto pb-4 md:pb-0">
          <MagnifyingGlassIcon className="h-10 w-10 text-[#d97d4a] stroke-1" />
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">Search</span>
            <input type="text"  placeholder="Insert keyword" className="text-sm text-gray-400 outline-none bg-transparent" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between px-6 border-b md:border-b-0 md:border-r border-gray-100 w-full md:w-auto pb-4 md:pb-0">
          <div className="flex items-center gap-4">
            <MapPinIcon className="h-10 w-10 text-[#d97d4a] stroke-1" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900">Destinations</span>
              <span className="text-sm text-gray-400">All Destinations</span>
            </div>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex-1 flex items-center justify-between px-6 w-full md:w-auto pb-4 md:pb-0">
          <div className="flex items-center gap-4">
            <CogIcon className="h-10 w-10 text-[#d97d4a] stroke-1" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900">Typologies</span>
              <span className="text-sm text-gray-400">All Typologies</span>
            </div>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-gray-400" />
        </div>
        <button className="w-full md:w-64 bg-[#d97d4a] text-white font-bold py-5 rounded-xl uppercase tracking-widest hover:bg-[#c46a3b] transition-all ml-0 md:ml-4 shadow-lg ">
          Search
        </button>
      </div>
    </section>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {destinations.map((dest, index) => (
            <div key={index} 
              className="relative h-112.5 rounded-[40px] overflow-hidden group cursor-pointer shadow-lg mt-8">
              <Image src={dest.image}  alt={dest.title}  fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end p-8 text-center">
                <h4 className="text-white text-2xl font-black mb-3">
                  {dest.title}
                </h4>
                <p className="text-white/90 text-xs font-medium leading-relaxed max-w-50">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}