import { FadeIn } from "@/components/animation/FadeIn";
import { BookOpen, Trophy, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/10" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                <div className="text-4xl font-heading font-bold text-primary mb-2">20+</div>
                <div className="text-slate-600 font-medium leading-tight">Years of academic excellence and holistic development.</div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">About TIS</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-[1.2]">
                A Legacy of Excellence in Education
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-slate-600 text-lg leading-relaxed">
                Tula's International School stands as a beacon of modern education infused with deep-rooted traditional values. Ranked among the top boarding schools in India, we provide a nurturing environment where students discover their true potential.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg">CBSE Curriculum</h4>
                    <p className="text-slate-500 text-sm mt-1">Rigorous academic framework designed for global readiness.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6 text-secondary-light" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg">Sports Excellence</h4>
                    <p className="text-slate-500 text-sm mt-1">World-class facilities for physical and mental development.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 sm:col-span-2">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg">Expert Faculty</h4>
                    <p className="text-slate-500 text-sm mt-1">Dedicated mentors fostering intellectual curiosity and character.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
