import CardDest from "@/components/CardDest";
import Image from "next/image";

const Destination = async() => {
    async function getData(){
       const res= await fetch(process.env.NEXT_PUBLIC_APIURL ,{
        cache:"no-store"   
       })
       return res.json()
    }
    const myData=await getData()
    return (
            <main className="min-h-screen bg-white ">
                  <section className="relative h-140 w-full overflow-hidden">
                    <Image  src="/destbg.jpg"  alt="dest" fill className="object-cover brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                      <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wide">Destinations</h1>
                    </div>
                  </section>
                  <CardDest packagesData={myData}/>    
             </main>
    );
}

export default Destination;
