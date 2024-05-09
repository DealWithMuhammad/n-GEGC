import Activites from "@/components/Activites/Activites";
import TeamSection from "@/components/team-section";
import CoreFeature from "@/components/core-feature";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreFeature />
      <TeamSection />
      <Activites />
      <Footer />
    </>
  );
}
