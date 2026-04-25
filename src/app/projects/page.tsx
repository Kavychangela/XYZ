"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { HiCheck } from 'react-icons/hi2';

export default function ProjectsPage() {
  const flagshipProjects = [
    {
      title: "Pal Property",
      category: "Real Estate",
      description: "A comprehensive real estate property platform that showcases properties and connects buyers with agents through an intuitive, modern interface.",
      url: "https://www.palrealtyventures.com/home",
      image: "/pal_property.png",
      glow: "cyan" as const,
      features: ["Property Listing", "Agent Connection", "Modern UI"]
    },
    {
      title: "Paintlib",
      category: "E-Commerce",
      description: "An elegant corporate and digital storefront website providing a streamlined browsing and purchasing experience for paint and design products.",
      url: "https://paintlib.in/",
      image: "/paintlib.png",
      glow: "purple" as const,
      features: ["Digital Storefront", "Corporate Catalog", "Responsive Design"]
    },
    {
      title: "RJ Consultancy",
      category: "Professional Services",
      description: "A professional business consulting platform offering streamlined information, lead capture and service scheduling for enterprise clients.",
      url: "https://rj-consultancy.in/",
      image: "/rj_consultancy.png",
      glow: "none" as const,
      features: ["Business Consulting", "Client Scheduling", "SEO Ready"]
    }
  ];

  const moreProjects = [
    {
      title: "Game App",
      category: "Mobile / Gaming",
      description: "A dynamic game app developed with Flutter, encompassing four engaging games for high user engagement and retention.",
      tech: ["Flutter", "Dart", "UX/UI Design"],
      glow: "purple" as const
    },
    {
      title: "MGM Marketplace",
      category: "Web / E-Commerce",
      description: "An inclusive online shopping platform catering to both buyers and sellers, enabling the sale of diverse physical and digital goods.",
      tech: ["Marketplace Architecture", "Payment Integration"],
      glow: "cyan" as const
    },
    {
      title: "Lab Management",
      category: "Web / Healthcare",
      description: "A secure, dynamic web application designed specifically for lab data management, reporting, and analysis within a unified interface.",
      tech: ["Web App", "Security", "Healthcare"],
      glow: "none" as const
    },
    {
      title: "Daily Doc (USA)",
      category: "Healthcare SaaS",
      description: "A HIPAA-compliant documentation platform for US healthcare professionals with advanced search and automated categorization.",
      tech: ["HIPAA Compliant", "React", "Node.js"],
      glow: "purple" as const
    },
    {
      title: "Avtech Solutions",
      category: "Engineering & Tech",
      description: "A high-performance web architecture with a sleek engineering UI, showcasing complex enterprise capabilities to a global audience.",
      tech: ["Next.js", "Enterprise UI", "SEO"],
      glow: "none" as const
    }
  ];

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
          <SectionHeading
            title="Our Projects"
            subtitle="A curated portfolio of enterprise solutions, platforms, and digital products we've engineered for clients worldwide."
            gradient
            align="left"
          />

          {/* Featured Projects */}
          <div className="grid grid-cols-1 gap-12 mt-12 mb-32">
            {flagshipProjects.map((project, idx) => (
              <Card key={idx} glowColor={project.glow} className="p-8 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                  <div className={idx % 2 === 0 ? 'lg:order-2' : ''}>
                    <span className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.4em] mb-4 block">[{project.category}]</span>
                    <h2 className="text-text-primary text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">{project.title}</h2>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 font-medium">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <HiCheck className="text-neon-cyan shrink-0" />
                          <span className="text-xs md:text-sm text-text-primary font-bold uppercase tracking-tight">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Button href={project.url} variant="primary" className="px-8 py-4 text-base">Launch Live</Button>
                  </div>

                  <div className={`relative min-h-[280px] rounded-2xl overflow-hidden ${idx % 2 === 0 ? 'lg:order-1' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Portfolio Grid */}
          <SectionHeading
            title="Full Portfolio"
            subtitle="More solutions built for diverse industries and use cases."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-20">
            {moreProjects.map((project, idx) => (
              <Card key={idx} glowColor={project.glow} className="p-8 md:p-12 group hover:bg-text-primary/[0.02] transition-all h-full">
                <span className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.4em] mb-4 block">[{project.category}]</span>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-text-primary group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-black uppercase text-text-primary/40 border border-text-primary/10 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a Project in Mind?"
        subtitle="Let's build something extraordinary together. Tell us about your vision and we'll engineer it to reality."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
