import Activites from "@/components/Activites/Activites";
import TeamSection from "@/components/team-section";
import CoreFeature from "@/components/core-feature";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/footer";
import { CanvasRevealEffectDemo2 } from "@/components/Static";
import HomeOurVision from "@/components/home/home-our-vision";
import HomeInitiatives from "../components/home/home-initiatives";
import Blogs from "@/components/home/blogs";

export default function Home() {
  return (
    <>
      <div className="w-full mb-10  bg-grid-black/[0.1] relative ">
        {/* Radial gradient for the container to give a faded look */}
        <Hero />
      </div>

      <CoreFeature />
      <HomeOurVision />
      <TeamSection />
      <Blogs />

      <HomeInitiatives />
      <CanvasRevealEffectDemo2 />
      <Activites />
      <Footer />
    </>
  );
}
