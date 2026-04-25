"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import { HiOutlineLightBulb, HiOutlineCheckCircle, HiOutlineRocketLaunch } from 'react-icons/hi2';

export default function SuccessStoriesPage() {
  const stories = [
    {
      title: "Avtech Solutions",
      category: "Engineering & Tech",
      problem: "Needed a modern platform to showcase complex engineering capabilities and enterprise solutions to a global audience.",
      solution: "Developed a high-performance web architecture with a sleek engineering UI, featuring interactive service modules.",
      outcome: "Significant increase in inbound enterprise inquiries and improved professional brand positioning.",
      glow: "purple" as const
    },
    {
      title: "MGM Marketplace",
      category: "E-Commerce",
      problem: "Lack of a unified platform that could handle dual-role functionality for physical and digital goods with high efficiency.",
      solution: "Architected a custom marketplace system with robust role-based access control and seamless payment integrations.",
      outcome: "Created a scalable ecosystem that streamlined vendor management and improved the buyer journey.",
      glow: "cyan" as const
    },
    {
        title: "Daily Doc (USA)",
        category: "Healthcare SaaS",
        problem: "Healthcare professionals in the US needed a more efficient way to manage documentation securely.",
        solution: "Collaborated on a HIPPA-compliant interface with advanced search and automated categorization features.",
        outcome: "Enhanced operational efficiency and improved documentation accuracy for medical practices.",
        glow: "purple" as const
    }
  ];

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
          <SectionHeading 
            title="Success Stories" 
            subtitle="Explore how we've helped diverse organizations solve complex problems with AI-driven solutions."
            gradient
            align="left"
          />
          
          <div className="grid grid-cols-1 gap-12 mt-12">
            {stories.map((story, i) => (
              <Card key={i} delay={i * 0.1} glowColor={story.glow} className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  <div className="lg:col-span-4">
                    <span className="text-xs font-black text-neon-cyan uppercase tracking-[0.4em] mb-4 block">[{story.category}]</span>
                    <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight leading-tight mb-4">{story.title}</h2>
                  </div>
                  
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-neon-purple mb-4">
                        <HiOutlineLightBulb className="text-lg shrink-0" />
                        <h4 className="font-black uppercase tracking-widest text-xs leading-none translate-y-[6px]">Problem</h4>
                      </div>
                      <p className="text-text-secondary leading-relaxed text-sm md:text-base font-medium">{story.problem}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-neon-cyan mb-4">
                        <HiOutlineRocketLaunch className="text-lg shrink-0" />
                        <h4 className="font-black uppercase tracking-widest text-xs leading-none translate-y-[6px]">Solution</h4>
                      </div>
                      <p className="text-text-secondary leading-relaxed text-sm md:text-base font-medium">{story.solution}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-green-400 mb-4">
                        <HiOutlineCheckCircle className="text-lg shrink-0" />
                        <h4 className="font-black uppercase tracking-widest text-xs leading-none translate-y-[6px]">Outcome</h4>
                      </div>
                      <p className="text-text-secondary leading-relaxed text-sm md:text-base font-medium">{story.outcome}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Scale?" 
        subtitle="Let's build something extraordinary together. Contact us for a technical consultation." 
      />
    </div>
  );
}
