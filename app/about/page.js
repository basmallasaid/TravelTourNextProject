import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-100 w-full overflow-hidden">
        <Image 
          src="/about.jpg" 
          alt="About Us" 
          fill 
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">About Us</h1>
          <p className="text-[#d97d4a] text-xl italic mt-4 font-serif" style={{ fontFamily: 'cursive' }}>
            Our Journey & Passion for Travel
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#d97d4a] font-bold uppercase tracking-widest mb-4">Who We Are</p>
          <h2 className="text-4xl font-black text-[#1e2a5e] mb-6 leading-tight">
            We Help You Explore <br /> The World Since 2010
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Love Travel started with a simple idea: to make world-class travel accessible and 
            stress-free for everyone. We believe that traveling is not just about visiting 
            new places, but about creating memories that last a lifetime.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our team consists of passionate explorers who have scoured every corner of the 
            globe to bring you the most authentic and breathtaking experiences.
          </p>
        </div>
        <div className="relative h-125 rounded-[40px] overflow-hidden shadow-2xl">
          <Image src="/hero_about.jpg" alt="Team" fill className="object-cover" />
        </div>
      </section>
      <section className="bg-[#1e2a5e] py-20 px-6 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-[#d97d4a] text-5xl font-black">15+</span>
            <span className="text-white uppercase text-xs tracking-widest opacity-70">Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#d97d4a] text-5xl font-black">500+</span>
            <span className="text-white uppercase text-xs tracking-widest opacity-70">Tours Completed</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#d97d4a] text-5xl font-black">20k</span>
            <span className="text-white uppercase text-xs tracking-widest opacity-70">Happy Clients</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#d97d4a] text-5xl font-black">45</span>
            <span className="text-white uppercase text-xs tracking-widest opacity-70">Destinations</span>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#d97d4a] font-bold uppercase tracking-widest mb-4">Our Mission</p>
          <h2 className="text-4xl font-black text-black mb-8 italic" style={{ fontFamily: 'cursive' }}>
            &#34;To connect people with cultures through authentic travel experiences.&#34;
          </h2>
          <button className="bg-[#d97d4a] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#c46a3b] transition-all shadow-lg">
            Join Our Next Trip
          </button>
        </div>
      </section>
    </main>
  );
}