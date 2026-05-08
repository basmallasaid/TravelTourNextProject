import Image from "next/image";
import SearchFilter from "@/components/SearchFilter"; 
import packagesData from "@/data/packages.json"; 

const SearchPage = async () => {
  
    const myData = packagesData.packages;

    return (
        <main className="min-h-screen bg-[#f8f9fa]">
            <section className="relative h-[400px] w-full overflow-hidden">
                <Image src="/destbg.jpg" alt="dest" fill className="object-cover brightness-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wide">Our Packages</h1>
                    <p className="mt-4 text-gray-200 font-medium tracking-widest uppercase text-sm">Find your next adventure</p>
                </div>
            </section>
            
            <SearchFilter packagesData={myData} />
        </main>
    );
}

export default SearchPage;