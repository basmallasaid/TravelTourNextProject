import Image from "next/image";
import SearchFilter from "@/components/SearchFilter"; 

const SearchPage = async () => {
    async function getData() {
        const res = await fetch(process.env.NEXT_PUBLIC_APIURL, {
            cache: "no-store"
        });
        return res.json();
    }
    const myData = await getData();

    return (
        <main className="min-h-screen bg-[#f8f9fa]">
            {/* Hero Section */}
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