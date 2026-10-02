import { FadeIn } from "@/components/animation/FadeIn";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="apply" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-slate-900 z-0" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready to Shape Your Child's Future?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-white/80 text-lg md:text-xl mb-10">
                Admissions are now open for the academic year 2026-27. Join the TIS family and give your child the foundation they deserve.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/30">
                Apply Online Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-sm border border-white/20">
                Download Prospectus
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
