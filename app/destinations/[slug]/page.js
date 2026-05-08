import Link from "next/link";
import {
  MapPinIcon,
  ClockIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import DestinationContent from '@/components/DestinationContent'
import Image from "next/image";
async function getSingleData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}?slug=${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}
export async function generateStaticParams() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL);
  const data = await res.json();
  const packagesArray = Array.isArray(data) ? data : data.packages;
  return packagesArray.map((item) => ({
    slug: item.slug,
  }));
}

const DestinationDetails = async ({ params }) => {
  const { slug } = await params;
  const data = await getSingleData(slug);

  if (!data) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Destination not found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white ">
      <section className="relative h-140 w-full overflow-hidden">
        <Image
          src={data.image}
          alt="dest"
          fill
          className="object-cover brightness-50"
        />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#fbf5f0] px-6 py-10 lg:px-24 gap-8 md:gap-4">
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <h2 className="text-4xl font-black text-black leading-none">
            {data.title}
          </h2>
          <div className="flex items-center gap-1 text-gray-400 mt-2">
            <MapPinIcon className="h-4 w-4" />
            <span className="text-sm font-medium">{data.location}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-12 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="bg-[#d57c48] p-3.5 rounded-full text-white shadow-sm">
              <ClockIcon className="h-6 w-6 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[13px] font-medium">
                Durations
              </span>
              <span className="text-black font-black text-lg">
                {data.duration}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#d57c48] p-3.5 rounded-full text-white shadow-sm">
              <ChartBarIcon className="h-6 w-6 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[13px] font-medium">
                Difficulty
              </span>
              <span className="text-black font-black text-lg">Easy</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#d57c48] p-3.5 rounded-full text-white shadow-sm">
              <UsersIcon className="h-6 w-6 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400 text-[13px] font-medium">
                Min Age
              </span>
              <span className="text-black font-black text-lg">0</span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full overflow-hidden px-6 lg:px-24 flex flex-col  py-20 mb-9">
            <div className="absolute inset-0 pointer-events-none w-10/11 h-full">
              <Image src="/para2.jpg"  alt="Compass Background" fill className="object-contain object-top "/>
            </div>
            <DestinationContent data={data}/>
        </section>
    </main>
  );
};

export default DestinationDetails;
