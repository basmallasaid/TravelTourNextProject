import Hero from "@/components/Hero";
import AboutSection from "@/components/aboutSection";

async function getPackages() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL, {
    next: { revalidate: 60 } 
  });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : data.packages;
}

export default async function Home() {
  const allPackages = await getPackages();
  const homePackages = allPackages.slice(0, 3);
  return (
    <>
      <Hero />
      <AboutSection packagesData={homePackages} />
    </>
  );
}