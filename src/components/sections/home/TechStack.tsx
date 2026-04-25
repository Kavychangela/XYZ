"use client";

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { 
  SiNextdotjs, SiTailwindcss, SiPython, SiOpenai, 
  SiLangchain, SiStripe, SiVercel, SiDocker, 
  SiSupabase, SiTypescript, 
  SiRedis, SiPostgresql, SiFigma, SiFramer, SiN8N,
  SiReact, SiTensorflow, SiPytorch, SiGooglecloud,
  SiKubernetes, SiMongodb, SiGithub, SiCloudflare
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const techs = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "n8n", icon: <SiN8N />, color: "#FF6D5A" },
  { name: "OpenAI", icon: <SiOpenai />, color: "#10A37F" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "LangChain", icon: <SiLangchain />, color: "#01EC97" },
  { name: "Stripe", icon: <SiStripe />, color: "#635BFF" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Framer", icon: <SiFramer />, color: "#0055FF" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
  { name: "GCP", icon: <SiGooglecloud />, color: "#4285F4" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
  { name: "Cloudflare", icon: <SiCloudflare />, color: "#F38020" },
];

export default function TechStack() {
  const scrollItems = [...techs, ...techs];

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background-primary border-b border-text-primary/5">
      <div className="container px-6 sm:px-8">
        <SectionHeading 
          title="The Stack"
          subtitle="Battle-tested technologies for mission-critical applications."
          gradient
          align="left"
        />
      </div>

      <div className="mt-12 md:mt-16 flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex overflow-hidden select-none group/marquee relative">
            <div className="animate-marquee flex items-center gap-4 py-2">
            {scrollItems.map((tech, i) => (
                <div 
                key={i} 
                className="flex items-center gap-4 px-6 md:px-12 py-4 md:py-6 bg-text-primary/[0.02] border border-text-primary/10 transition-all duration-500 group/item hover:bg-text-primary/[0.05] rounded-xl md:rounded-2xl"
                style={{ 
                    //@ts-ignore
                    '--hover-color': tech.color 
                } as any}
                >
                <div className="text-3xl md:text-4xl text-text-secondary group-hover/item:text-[var(--hover-color)] transition-colors duration-500">
                    {tech.icon}
                </div>
                <span className="font-outfit font-black text-base md:text-xl uppercase tracking-tighter text-text-secondary group-hover/item:text-text-primary transition-colors duration-500">
                    {tech.name}
                </span>
                </div>
            ))}
            </div>
            {/* Fades */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-background-primary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-background-primary to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Row 2 Reverse */}
        <div className="flex overflow-hidden select-none group/marquee relative">
            <div className="animate-marquee-reverse flex items-center gap-4 py-2">
            {scrollItems.map((tech, i) => (
                <div 
                key={i} 
                className="flex items-center gap-4 px-6 md:px-12 py-4 md:py-6 bg-text-primary/[0.02] border border-text-primary/10 transition-all duration-500 group/item hover:bg-text-primary/[0.05] rounded-xl md:rounded-2xl"
                style={{ 
                    //@ts-ignore
                    '--hover-color': tech.color 
                } as any}
                >
                <div className="text-3xl md:text-4xl text-text-secondary group-hover/item:text-[var(--hover-color)] transition-colors duration-500">
                    {tech.icon}
                </div>
                <span className="font-outfit font-black text-base md:text-xl uppercase tracking-tighter text-text-secondary group-hover/item:text-text-primary transition-colors duration-500">
                    {tech.name}
                </span>
                </div>
            ))}
            </div>
            {/* Fades */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-background-primary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-background-primary to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 40s linear infinite;
        }
        .group\/marquee:hover .animate-marquee,
        .group\/marquee:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
