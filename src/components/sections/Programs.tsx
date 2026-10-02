import { FadeIn } from "@/components/animation/FadeIn";
import { ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    title: "Modern Gurukul",
    description: "Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    title: "16+ Sports",
    description: "Archery, Swimming, Karate, Polo, Basketball and more.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    title: "Arts & Culture",
    description: "Nurturing creativity through extensive arts programs.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    title: "Global Leadership",
    description: "Preparing students for tomorrow's challenges.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
];

export const Programs = () => {
  return (
    <section id="academics" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Programs</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 leading-[1.1]">
                Designed for the <br/><span className="text-accent">Future</span>
              </h3>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 text-lg max-w-md">
              We offer a progressive curriculum that goes beyond textbooks, preparing students for the challenges of tomorrow with a wide array of disciplines.
            </p>
          </FadeIn>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <FadeIn key={program.title} delay={index * 0.1} className={`${program.colSpan} h-[400px]`}>
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                  <h4 className="text-3xl font-heading font-bold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-300">
                    {program.title}
                  </h4>
                  <p className="text-white/80 font-medium mb-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 delay-75">
                    {program.description}
                  </p>
                  
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
