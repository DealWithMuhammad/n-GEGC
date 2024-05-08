import Activites from "@/components/Activites/Activites";
import TeamSection from "@/components/team-section";
import CoreFeature from "@/components/core-feature";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Activites />
      <TeamSection />
      <CoreFeature />
    </>
  );
}
