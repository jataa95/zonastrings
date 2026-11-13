import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutTeaser from "@/components/AboutTeaser";
import WorkStack from "@/components/WorkStack";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Studio from "@/components/Studio";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="-mt-28 relative">
        <Marquee />
      </div>
      <AboutTeaser />
      <WorkStack />
      <Services />
      <Process />
      <Studio />
    </>
  );
}
