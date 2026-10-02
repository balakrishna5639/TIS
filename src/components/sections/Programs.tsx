import { FadeIn } from "@/components/animation/FadeIn";
import { ArrowRight, Trophy, BookOpen, HeartPulse } from "lucide-react";

const PROGRAMS = [
  {
    title: "Modern Gurukul",
    description: "Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    bgClass: "bg-blue-600",
  },
  {
    title: "16+ World-Class Sports",
    description: "It's not just a facility, it's the foundation! Archery, Swimming, Karate, Polo, and more curated for joy and discipline.",
    icon: <Trophy className="w-8 h-8 text-white" />,
    bgClass: "bg-primary",
  },
  {
    title: "Holistic Development",
    description: "We provide world-class education, modern facilities, and a nurturing environment for students to thrive socially and culturally.",
    icon: <HeartPulse className="w-8 h-8 text-white" />,
    bgClass: "bg-[#007A83]",
  },
];

export const Programs = () => {
  return (
    <section id="academics" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Our Programs</h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              Designed for the Future
            </h3>
            <p className="text-slate-600 text-lg">
              We offer a progressive curriculum that goes beyond textbooks, preparing students for the challenges of tomorrow.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <FadeIn key={program.title} delay={index * 0.1} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-slate-100 group">
                <div className={`w-16 h-16 rounded-xl ${program.bgClass} flex items-center justify-center mb-6 shadow-lg shadow-${program.bgClass}/30 transform group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h4 className="text-2xl font-heading font-bold text-slate-900 mb-4">{program.title}</h4>
                <p className="text-slate-600 mb-8 flex-grow">{program.description}</p>
                <button className="flex items-center text-primary font-semibold group/btn mt-auto">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
