import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Programs } from "@/components/sections/Programs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
