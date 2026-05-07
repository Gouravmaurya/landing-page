import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import TextRevealSection from "@/components/sections/TextRevealSection";
import Services from "@/components/sections/Services";
import RachelAI from "@/components/sections/RachelAI";
import Workflow from "@/components/sections/Workflow";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Logos />
      <Stats />
      <Features />
      <TextRevealSection />
      <Services />
      <RachelAI />
      <Workflow />
      <FAQ />
      <CTA />
      
      <Footer />
    </main>
  );
}
