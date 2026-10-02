import { FadeIn } from "@/components/animation/FadeIn";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-[80%] h-full bg-white -skew-x-12 translate-x-1/3 z-0 shadow-sm" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
              {/* Clean Image Composition */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl border-[6px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1776&auto=format&fit=crop" 
                  alt="TIS Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-2">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Welcome to Tulas</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight">
                MADE FOR <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff4d6d]">THE FUTURE</span>
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                Tula's International School stands as a beacon of modern education infused with deep-rooted traditional values. We provide a nurturing environment where students discover their true potential and prepare for a globalized world.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-slate-500 text-lg leading-relaxed">
                By combining a rigorous academic curriculum with world-class infrastructure, we ensure that every student receives personalized attention and holistic development. At Tulas, education is not just about academics; it's about building character, discipline, and lifelong leadership skills.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <button className="px-8 py-4 mt-4 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-full font-bold transition-colors duration-300 flex items-center gap-2 group">
                Discover Our Heritage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
