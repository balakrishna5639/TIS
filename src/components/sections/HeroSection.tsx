"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Award, Globe } from "lucide-react";
import { FadeIn } from "@/components/animation/FadeIn";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  // Parallax effects
  const imageY = useTransform(scrollY, [0, 1000], [0, 150]); // Reduced parallax distance for smoother scrolling
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen bg-[#FDFDFD] overflow-hidden pt-32 pb-20">
      
      {/* Abstract Gradient Background - STATIC for perfect performance (0 lag) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-[100px] opacity-70 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-bl from-blue-100/40 to-teal-50/40 blur-[80px] opacity-70 -translate-x-1/3 translate-y-1/3" />
        
        {/* Subtle grid pattern overlay for texture without performance cost */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        
        {/* Top Label */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-8">
            <div className="px-5 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 shadow-sm flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold tracking-widest uppercase text-slate-700">
                Admissions Open 2026-27
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Main Typography */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="text-center max-w-5xl mx-auto z-20 relative"
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-slate-900 mb-6">
            SHAPE YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative">
              LEGACY.
              {/* Hand-drawn yellow underline SVG - optimized */}
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-2 left-0 w-full h-auto opacity-80" viewBox="0 0 268.317 14.075">
                <path d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0" transform="translate(-403.065 -1791.313)" fill="none" stroke="#c09d59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Tula's International School isn't just an institution; it's a foundation where tradition meets global innovation. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-primary text-white rounded-full font-bold transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 rounded-full font-bold transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm">
              <Play className="w-4 h-4 fill-slate-900" />
              Campus Tour
            </button>
          </div>
        </motion.div>

        {/* Dynamic Image Grid / Hero Visual */}
        <div className="mt-16 relative z-10 max-w-5xl mx-auto w-full">
          <motion.div 
            style={{ y: imageY }}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[16/9] md:aspect-[21/9]"
          >
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
              alt="TIS Campus Drone View" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            
            {/* Embedded Floating Stats within Hero Image */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col sm:flex-row justify-between items-end gap-4">
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 text-white">
                <div className="bg-primary p-2.5 rounded-full">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">#1 Ranked</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider">Boarding School</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 text-white">
                <div className="bg-accent p-2.5 rounded-full">
                  <Globe className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">15+ Acres</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider">Campus Size</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
