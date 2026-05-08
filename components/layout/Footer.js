import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"; 

export default function Footer() {
  return (
    <>
    <section className="relative w-full h-28 overflow-hidden">
    <div className="absolute inset-0 -z-10">
    <Image 
      src="/bg3.png" alt="Decorative Border" fill className="object-contain"  priority />
    </div>
    </section>
    <footer className="relative w-full bg-[#1E2D59] text-white pt-32 pb-10 px-6 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image  src="/bgfooter.png"  alt="Background Pattern" fill className="object-cover"/>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Travel beyond your imagination, with our Travel Agency!
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold mb-2">Address</h4>
          <p className="text-gray-300">1080 Brickell Ave</p>
          <p className="text-gray-300">Miami - Florida</p>
          <p className="text-gray-300">U.S. of America</p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-[#d97d4a] transition-colors" />
            <FaTwitter className="cursor-pointer hover:text-[#d97d4a] transition-colors" />
            <FaYoutube className="cursor-pointer hover:text-[#d97d4a] transition-colors" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold mb-2">Contact</h4>
          <button className="bg-[#d97d4a] text-white py-3 px-6 rounded-md font-bold w-fit hover:bg-[#c46a3b] transition-all">
            info@travel.com
          </button>
          <p className="text-2xl font-bold mt-2">+ 01 483 593 284</p>
        </div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10">
        <div className="flex gap-6 text-sm text-gray-300 mb-6 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">Travel WordPress Theme</a>
          <span className="text-[#d97d4a]">•</span>
          <a href="#" className="hover:text-white transition-colors">Rental</a>
          <span className="text-[#d97d4a]">•</span>
          <a href="#" className="hover:text-white transition-colors">Insurance</a>
        </div>
      </div>
    </footer>
    </>
  );
}