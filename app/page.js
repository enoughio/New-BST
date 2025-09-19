import BottomCTA from "@/components/main/BottomCTA";
import GetToKnowUs from "@/components/main/GetToKnowUs";
import Hero from "@/components/main/Hero";
import HeroContact from "@/components/main/HeroContact";
import Programs from "@/components/main/programs";
import Stats from "@/components/main/stats";
import Testimonials from "@/components/main/testimonials";
import WhyChosoeUs from "@/components/main/WhyChosoeUs";


export default function Home() {
  return (
    <div className="" >

      <Hero />
      <WhyChosoeUs />
      <GetToKnowUs />
      <Programs />
      <Stats />
      <Testimonials />
      <BottomCTA />
      <HeroContact />

    </div>
  );
}
