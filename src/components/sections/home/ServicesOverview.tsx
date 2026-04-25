"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import { HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineUserPlus, HiOutlineSparkles, HiOutlineArrowRight } from 'react-icons/hi2';
import Link from 'next/link';
import Card from '@/components/ui/Card';

export default function ServicesOverview() {
  const verticals = [
    {
      title: "Product-Based",
      icon: <HiOutlineSparkles />,
      desc: "Our proprietary AI platforms (Edict, Edex) designed for enterprise automation.",
      tag: "FLAGSHIP"
    },
    {
      title: "Service-Based",
      icon: <HiOutlineCodeBracket />,
      desc: "Custom end-to-end development, from custom LLMs to high-scale web systems.",
      tag: "ELITE"
    },
    {
      title: "Staff Augmentation",
      icon: <HiOutlineUserPlus />,
      desc: "Elite engineering talent embedded into your teams to accelerate delivery.",
      tag: "TOP 1%"
    }
  ];

  return (
    <section className="section bg-background-primary py-24 md:py-32 border-b border-text-primary/5">
      <div className="container px-6 sm:px-8">
        <SectionHeading 
          title="The Services" 
          subtitle="Precision-engineered solutions for the era of intelligence."
          gradient
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {verticals.map((v, i) => (
            <Link key={i} href={v.title === "Staff Augmentation" ? "/staff-augmentation" : "/services"} className="block h-full group">
              <Card delay={i * 0.1} className="p-10 md:p-14 h-full relative overflow-hidden group-hover:bg-text-primary/[0.02] transition-all rounded-3xl cursor-pointer">
                <div className="absolute top-0 right-0 p-6 font-black text-[10px] tracking-[0.4em] text-text-primary/20 group-hover:text-neon-cyan transition-colors">
                  // {v.tag}
                </div>

                <div className="text-4xl md:text-5xl text-neon-cyan mb-10 transform group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-text-primary group-hover:text-neon-cyan transition-colors">
                  {v.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-10 text-base md:text-lg font-medium">
                  {v.desc}
                </p>

                <div className="mt-auto inline-flex items-center gap-3 font-black text-[10px] text-text-primary uppercase tracking-widest group-hover:text-neon-cyan transition-colors">
                  Configure Solution <HiOutlineArrowRight className="text-lg" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
