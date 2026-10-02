import { FadeIn } from "@/components/animation/FadeIn";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[80%] h-full bg-slate-800 -skew-x-12 translate-x-1/3 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Community Voices</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black mb-4">
            Hear from Our Family
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <FadeIn delay={0.1}>
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 p-10 rounded-[2.5rem] hover:bg-slate-800 transition-colors h-full flex flex-col relative group">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-slate-700 group-hover:text-primary transition-colors duration-500" />
              <div className="flex gap-1 mb-8 text-accent">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-xl font-medium mb-10 leading-relaxed flex-grow">
                “We feel supported in what we do and nudged further to do more. At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.”
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden ring-2 ring-accent/50 p-1">
                  <img src="https://i.pravatar.cc/150?img=1" alt="Parent" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg">Happy Parent</h4>
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">TIS Community</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 p-10 rounded-[2.5rem] hover:bg-slate-800 transition-colors h-full flex flex-col relative group">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-slate-700 group-hover:text-primary transition-colors duration-500" />
              <div className="flex gap-1 mb-8 text-accent">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-xl font-medium mb-10 leading-relaxed flex-grow">
                “Tulas helped me thrive and become the best version of myself. When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine.”
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden ring-2 ring-accent/50 p-1">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Student" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg">Proud Alumnus</h4>
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">TIS Graduate</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
