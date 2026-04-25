"use client";

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function Process() {
  const steps = [
    { title: "Discovery", desc: "We identify automation bottlenecks and AI opportunities in your workflow." },
    { title: "Strategy", desc: "A detailed technical architecture plan tailored to your business needs." },
    { title: "Execution", desc: "Building and refining models on your proprietary datasets." },
    { title: "Scaling", desc: "Full-scale rollout with continuous monitoring and optimization." }
  ];

  return (
    <section className="section bg-background-primary py-24 md:py-32 border-b border-text-primary/5">
      <div className="container px-6 sm:px-8">
        <SectionHeading 
          title="The Pipeline"
          subtitle="From raw infrastructure to autonomous intelligence."
          gradient
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, i) => (
            <Card 
              key={i} 
              delay={i * 0.1}
              className="group hover:bg-text-primary/[0.02] transition-all relative overflow-hidden flex flex-col h-full"
            >
              {/* Top Right Watermark - Small and subtle */}
              <div className="absolute top-6 right-10 text-4xl md:text-5xl font-black text-text-primary/[0.08] tracking-tighter group-hover:text-neon-cyan/30 transition-all duration-500 pointer-events-none select-none z-0">
                0{i + 1}
              </div>
              
              <div className="relative z-10 pr-4 flex flex-col h-full">
                <div className="flex flex-col gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan font-black text-xs">
                      {i + 1}
                  </div>
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-text-primary max-w-[80%] leading-none">
                    {step.title}
                  </h4>
                </div>
                
                <p className="text-text-secondary leading-relaxed text-sm font-medium">
                  {step.desc}
                </p>

                <div className="mt-auto pt-8 h-[2px] w-12 bg-neon-cyan opacity-20"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
