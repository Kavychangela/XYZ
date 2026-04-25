"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { HiOutlineUserGroup, HiOutlineBolt, HiOutlineShieldCheck, HiOutlineCpuChip } from 'react-icons/hi2';

import { 
  SiPython, SiReact, SiSpringboot, SiWordpress, SiSalesforce, 
  SiOpenai, SiDocker, SiFlutter, SiJavascript, SiNodedotjs
} from 'react-icons/si';
import { FaAws, FaDatabase, FaServer } from 'react-icons/fa';

export default function StaffAugmentationPage() {
  const skills = [
    { name: "AI & ML Intelligence", icon: <SiOpenai /> },
    { name: "Python Engineering", icon: <SiPython /> },
    { name: "DevOps & SRE", icon: <SiDocker /> },
    { name: "MERN / MEAN Stack", icon: <SiReact /> },
    { name: "Full-Stack Ops", icon: <SiJavascript /> },
    { name: "Java / Spring Boot", icon: <SiSpringboot /> },
    { name: "PHP / WordPress", icon: <SiWordpress /> },
    { name: "Oracle & SQL", icon: <FaDatabase /> },
    { name: "Salesforce Dev", icon: <SiSalesforce /> },
    { name: "ServiceNow Expert", icon: <FaServer /> },
    { name: "QA Automation", icon: <HiOutlineShieldCheck /> },
    { name: "Cloud Architect", icon: <FaAws /> },
    { name: "iOS / Android", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
  ];

  const benefits = [
    {
      title: "Top 1% Talent",
      desc: "Our rigorous vetting process ensures you get only the most capable engineers who can contribute instantly.",
      icon: <HiOutlineUserGroup />
    },
    {
      title: "Rapid Scaling",
      desc: "100+ bench resources ready. Onboard elite talent in as little as 24 hours to meet your project deadlines.",
      icon: <HiOutlineBolt />
    },
    {
      title: "IP Protection",
      desc: "Enterprise-grade compliance and strict NDAs ensure your intellectual property and data remain secure.",
      icon: <HiOutlineShieldCheck />
    },
    {
        title: "AI-First",
        desc: "All our developers are trained in leveraging AI tools to maximize velocity and code quality.",
        icon: <HiOutlineCpuChip />
    }
  ];

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
          <SectionHeading 
            title="Elite Augmentation" 
            subtitle="Bridge your talent gap with high-performance engineers. We provide the expertise you need to scale instantly."
            gradient
            align="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-12 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-text-primary">
                Embed Tech <br /><span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 font-medium">
                In today's fast-paced market, finding specialized talent shouldn't be your bottleneck. PDS provides pre-vetted, high-quality developers who integrate seamlessly.
              </p>
              
              <div className="mb-12">
                <h4 className="font-black text-neon-cyan uppercase tracking-[0.4em] text-[10px] mb-6">// Core Talent Pool</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-3 bg-text-primary/[0.03] border border-text-primary/10 rounded-xl hover:border-neon-cyan transition-colors group"
                    >
                      <div className="text-neon-cyan text-lg group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-tight text-text-primary/80 group-hover:text-text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button href="/contact" variant="primary" className="px-10 py-5 text-lg skew-x-[-12deg] rounded-none">
                <span className="skew-x-[12deg]">Request Talent Profile</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, i) => (
                <Card key={i} delay={i * 0.1} className="p-8 md:p-10">
                  <div className="text-4xl text-neon-cyan mb-6">{benefit.icon}</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 text-text-primary">{benefit.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-medium">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instant Availability Highlight */}
      <section className="py-20 border-y border-text-primary/10 bg-text-primary/[0.02]">
        <div className="container px-6 sm:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-text-primary mb-4 leading-none">
                        INSTANT <span className="text-neon-cyan">MOBILIZATION.</span>
                    </h2>
                    <p className="text-text-secondary font-medium text-lg">
                        100+ bench resources are currently standing by for immediate project integration.
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <div className="text-6xl md:text-8xl font-black text-neon-cyan tracking-tighter mb-2">24h</div>
                    <div className="text-xs font-black uppercase tracking-[0.5em] text-text-primary/40">Onboarding Protocol</div>
                </div>
            </div>
        </div>
      </section>

      <CTA 
        title="Scale Your Force Today" 
        subtitle="Our elite operators are ready to join your next sprint. Contact us for a talent consultation." 
      />
    </div>
  );
}
