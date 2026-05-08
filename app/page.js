import Hero from "@/components/Hero";
import AboutSection from "@/components/aboutSection";
import packagesData from "@/data/packages.json"; 

export default async function Home() {
  const allPackages = packagesData.packages;
  const homePackages = allPackages.slice(0, 3);

  return (
    <>
      <Hero />
      <AboutSection packagesData={homePackages} />
    </>
  );
}