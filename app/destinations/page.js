import CardDest from "@/components/CardDest";
import Image from "next/image";
import packagesData from "@/data/packages.json"; 

const Destination = async () => {
    const myData = packagesData.packages; 

    return (
        <main className="min-h-screen bg-white ">
            <section className="relative h-140 w-full overflow-hidden">
                <Image src="/destbg.jpg" alt="dest" fill className="object-cover brightness-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wide">Destinations</h1>
                </div>
            </section>
            <CardDest packagesData={myData}/>    
        </main>
    );
}

export default Destination;