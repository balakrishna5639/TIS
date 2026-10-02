import { FadeIn } from "@/components/animation/FadeIn";
import { Award, Building, Users, GraduationCap } from "lucide-react";

const RANKINGS = [
  { text: "#1 BEST BOARDING SCHOOL IN NORTH INDIA" },
  { text: "#1 CBSE CO-ED BOARDING SCHOOL IN NORTH INDIA" },
  { text: "#1 IN INFRASTRUCTURE" },
  { text: "#1 IN HOLISTIC EDUCATION" },
];

const STATS = [
  { value: "20+", label: "Years of Academic Excellence", icon: <Award className="w-8 h-8 text-primary" /> },
  { value: "15+", label: "Acre Campus", icon: <Building className="w-8 h-8 text-primary" /> },
  { value: "2000+", label: "Alumni Network", icon: <GraduationCap className="w-8 h-8 text-primary" /> },
  { value: "6:1", label: "Student Teacher Ratio", icon: <Users className="w-8 h-8 text-primary" /> },
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">

        {/* Rankings Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {RANKINGS.map((ranking, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-primary text-white p-8 rounded-xl h-full flex items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                <h4 className="font-heading font-bold text-lg leading-tight uppercase tracking-wide">
                  {ranking.text}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-slate-100 pt-16">
          {STATS.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
