"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineTrophy } from 'react-icons/hi2';

export default function InsightsHub() {
  const categories = [
    {
      title: "Success Stories",
      desc: "Detailed case studies on how we solved complex enterprise challenges using AI and modern engineering.",
      href: "/success-stories",
      icon: <HiOutlineTrophy />,
      color: "cyan"
    },
    {
      title: "Engineering Blog",
      desc: "Technical deep-dives, AI research summaries, and industry updates from our elite engineering team.",
      href: "/blog",
      icon: <HiOutlineBookOpen />,
      color: "purple"
    },
    {
      title: "Seminars & Workshops",
      desc: "Join our upcoming tech workshops and AI seminars to stay ahead of the digital curve.",
      href: "/seminars",
      icon: <HiOutlineAcademicCap />,
      color: "pink"
    }
  ];

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-40 pb-20 border-b border-text-primary/5">
        <div className="container px-6 sm:px-8 text-center sm:text-left">
          <SectionHeading 
            title="Insights & Research" 
            subtitle="The intersection of elite engineering and autonomous intelligence."
            gradient
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {categories.map((cat, i) => (
              <Card key={i} delay={i * 0.1} className="p-0 overflow-hidden h-full">
                <Link 
                  href={cat.href}
                  className="p-12 md:p-16 flex flex-col h-full group hover:bg-text-primary/[0.02] transition-all relative"
                >
                  {/* Background Decor */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 text-neon-${cat.color}`}>
                      {cat.icon}
                  </div>

                  <div className={`text-5xl text-neon-${cat.color} mb-12 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                    {cat.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter text-text-primary">
                    {cat.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-10 text-lg">
                    {cat.desc}
                  </p>

                  <div className={`mt-auto inline-flex items-center gap-2 font-black text-xs text-text-primary uppercase tracking-[0.2em] group-hover:text-neon-${cat.color} transition-colors`}>
                    EXPLORE CATEGORY <span className="translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Stay Informed on AI Evolution" 
        subtitle="Subscribe to our engineering newsletter for exclusive technical insights and project updates."
        primaryButtonText="Subscribe Now"
      />
    </div>
  );
}
