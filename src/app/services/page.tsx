"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import { HiOutlineCpuChip, HiOutlineCodeBracket, HiOutlineUserPlus, HiOutlineSparkles, HiOutlineDevicePhoneMobile, HiOutlineCloud, HiOutlineArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

export default function ServicesPage() {
  const verticals = [
    {
      title: "Product-Based",
      icon: <HiOutlineSparkles />,
      desc: "Our proprietary AI-powered platforms designed for specific industry needs.",
      links: [
        { name: "Edict AI Platform", href: "/products" },
        { name: "Edex Learning Management", href: "/products" }
      ]
    },
    {
      title: "Service-Based",
      icon: <HiOutlineCodeBracket />,
      desc: "Custom end-to-end development and digital transformation services.",
      links: [
        { name: "AI & ML Solutions", href: "#ai" },
        { name: "Web & Mobile Apps", href: "#other" },
        { name: "Cloud & QA", href: "#other" }
      ]
    },
    {
      title: "Staff Augmentation",
      icon: <HiOutlineUserPlus />,
      desc: "Elite engineering talent embedded into your teams to accelerate delivery.",
      links: [
        { name: "Hire Top Developers", href: "/staff-augmentation" },
        { name: "Dedicated AI Teams", href: "/staff-augmentation" }
      ]
    }
  ];

  const services = [
    {
      id: "ai",
      category: "ELITE",
      title: "NexGen AI Services",
      description: "Custom LLMs, autonomous agents, and RAG pipelines integrated into your ecosystem. We combine decades of engineering experience with cutting-edge AI to automate complex workflows.",
      features: ["Autonomous Agents", "Custom LLM Integration", "Predictive Analytics"],
      icon: <HiOutlineCpuChip />,
      glowColor: 'purple' as const
    },
    {
      id: "specialized",
      category: "ENTERPRISE",
      title: "Specialized Apps",
      description: "Tailored software for unique business needs, including ERP implementations, SAP solutions, and migration of legacy systems to modern cloud infrastructures.",
      features: ["ERP & SAP Solutions", "Cloud Migration", "Legacy Refactoring"],
      icon: <HiOutlineCloud />,
      glowColor: 'cyan' as const
    },
    {
      id: "other",
      category: "CORE",
      title: "Full-Stack Ops",
      description: "High-performance architectures built with modern stacks (Next.js, React Native, Swift, Kotlin). We secure your endpoints and deploy Zero Trust networks.",
      features: ["Native Apps", "Zero Trust Security", "Enterprise SaaS"],
      icon: <HiOutlineDevicePhoneMobile />,
      glowColor: 'none' as const
    }
  ];

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
          <SectionHeading 
            title="Our Verticals" 
            subtitle="Providing a multi-faceted approach to digital excellence, from proprietary products to elite engineering."
            gradient
            align="left"
          />
          
          {/* Verticals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-32">
            {verticals.map((v, i) => (
              <Card key={i} delay={i * 0.1} className="p-10 md:p-16 border-text-primary/10 group hover:bg-text-primary/[0.02] transition-all relative overflow-hidden h-full">
                <div className="text-4xl md:text-5xl text-neon-cyan mb-8 transform group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-text-primary">{v.title}</h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 font-medium">{v.desc}</p>
                <div className="flex flex-col gap-3">
                  {v.links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="text-xs font-black text-neon-cyan hover:text-text-primary uppercase tracking-[0.2em] transition-colors">
                      {link.name} →
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <SectionHeading 
            title="Premium Hierarchy" 
            subtitle="Our specialized offerings prioritized by impact."
            align="left"
          />

          <div className="grid grid-cols-1 gap-12 mt-12">
            {services.map((service, i) => (
              <Card key={i} delay={i * 0.1} glowColor={service.glowColor} className="p-8 md:p-16 border-text-primary/10" id={service.id}>
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="shrink-0">
                    <div className="text-6xl md:text-8xl" style={{ color: service.glowColor === 'purple' ? 'var(--neon-purple)' : 'var(--neon-cyan)' }}>
                        {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <span className="text-xs font-black text-neon-cyan uppercase tracking-[0.4em] mb-4 block">[{service.category}]</span>
                    <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">{service.title}</h3>
                    <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 font-medium">
                        {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-12">
                        {service.features.map((feature, idx) => (
                        <span key={idx} className="px-6 py-2 rounded-full bg-text-primary/5 border border-text-primary/10 text-text-primary font-black uppercase text-[10px] tracking-widest">
                            {feature}
                        </span>
                        ))}
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-4 font-black uppercase tracking-[0.2em] text-xs text-text-primary hover:text-neon-cyan transition-all">
                        Request Consultation <HiOutlineArrowRight />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Scale Your Engineering Force" 
        subtitle="Combine your vision with our execution expertise. Let's build the future together." 
      />
    </div>
  );
}
