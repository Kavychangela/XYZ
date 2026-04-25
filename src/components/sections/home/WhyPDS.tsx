"use client";

import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineCpuChip, HiOutlineBolt } from 'react-icons/hi2';

export default function WhyPDS() {
  const reasons = [
    {
      title: "Elite AI Expertise",
      desc: "Architecting RAG pipelines, Agentic Workflows, and Custom LLM implementations that redefine industry performance.",
      icon: <HiOutlineCpuChip />,
      stat: "99% Accuracy"
    },
    {
      title: "Hyper Scalability",
      desc: "Engineered for rapid growth. From stealth-mode prototypes to enterprise systems handling billions of data points.",
      icon: <HiOutlineBolt />,
      stat: "10x Growth"
    },
    {
      title: "Sovereign Security",
      desc: "Zero-Trust architecture and industrial-grade encryption ensuring your IP and data models remain yours.",
      icon: <HiOutlineShieldCheck />,
      stat: "Zero Leaks"
    },
    {
      title: "Mission-Critical Success",
      desc: "A relentless focus on ROI and delivery excellence. We measure success by your competitive dominance.",
      icon: <HiOutlineUserGroup />,
      stat: "24/7 Support"
    }
  ];

  return (
    <section className="section bg-background-secondary/30 border-y border-text-primary/5 py-24 md:py-32">
      <div className="container px-6 sm:px-8">
        <SectionHeading
          title="The PDS Advantage"
          subtitle="Precision engineering for the era of intelligence."
          gradient
          align="left"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, i) => (
            <Card key={i} delay={i * 0.1} className="group hover:bg-text-primary/[0.02] transition-colors relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              <div className="text-4xl text-neon-cyan mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tighter text-text-primary">
                {reason.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base">
                {reason.desc}
              </p>

              <div className="mt-auto text-[10px] md:text-xs font-black text-neon-purple tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                {reason.stat}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
