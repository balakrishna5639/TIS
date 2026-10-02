import { FadeIn } from "@/components/animation/FadeIn";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-4xl font-heading font-bold mb-4">
            Hear from Our Community
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-colors h-full">
              <div className="flex gap-1 mb-6 text-primary">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-white/90 text-lg italic mb-8 leading-relaxed">
                “We feel supported in what we do and nudged further to do more. At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=1" alt="Parent" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-heading font-bold">Happy Parent</h4>
                  <p className="text-white/60 text-sm">TIS Community</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-colors h-full">
              <div className="flex gap-1 mb-6 text-primary">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-white/90 text-lg italic mb-8 leading-relaxed">
                “Tulas helped me thrive and become the best version of myself. When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine.”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-heading font-bold">Proud Alumnus</h4>
                  <p className="text-white/60 text-sm">TIS Graduate</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
