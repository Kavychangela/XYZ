"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { HiCheck, HiOutlineArrowRight } from 'react-icons/hi2';

export default function ProductsPage() {
  const edictFeatures = [
    "Secure Document Vault",
    "Automated Client Requests",
    "Task Management",
    "Calendar & Reminders",
    "Communication Portal",
    "End-to-End Encryption"
  ];

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
          <SectionHeading
            title="Our Products"
            subtitle="Discover Edict — the smart management tool designed for modern professionals."
            gradient
            align="left"
          />

          <div className="grid grid-cols-1 gap-12 mt-12">
            {/* Edict Highlight */}
            <Card glowColor="cyan" className="p-8 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.4em] mb-4 block">[Flagship Product]</span>
                  <h2 className="text-gradient text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">Edict</h2>
                  <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 font-medium">
                    Smart Management Tool for CAs, Architects, and Consultants. Streamlines secure file storage and automated document collection — built for the modern professional.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {edictFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <HiCheck className="text-neon-cyan shrink-0" />
                        <span className="text-xs md:text-sm text-text-primary font-bold uppercase tracking-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="https://edictapp.com" variant="primary" className="px-8 py-4 text-base">Visit Website</Button>
                    <Button variant="outline" className="px-8 py-4 text-base">Schedule Demo</Button>
                  </div>
                </div>

                <div className="bg-background-secondary border border-text-primary/10 overflow-hidden min-h-[300px] md:min-h-[400px] relative rounded-2xl">
                  <div className="absolute top-0 left-0 w-full h-8 bg-background-primary/50 border-b border-text-primary/5 flex items-center px-4 gap-1.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <img
                    src="/edict_dashboard.png"
                    alt="Edict Dashboard"
                    className="w-full h-full object-cover object-top grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </Card>

            {/* Link to Projects */}
            <Card className="p-8 md:p-12 group hover:bg-text-primary/[0.02] transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-black text-neon-purple uppercase tracking-[0.4em] mb-3 block">[Client Work]</span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3 text-text-primary">Explore Our Portfolio</h3>
                  <p className="text-text-secondary text-base leading-relaxed font-medium max-w-lg">
                    From real estate platforms to healthcare SaaS — see the diverse range of enterprise products we've built for clients worldwide.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="shrink-0 inline-flex items-center gap-3 font-black text-sm text-neon-cyan uppercase tracking-widest group-hover:gap-5 transition-all"
                >
                  View All Projects <HiOutlineArrowRight className="text-xl" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Integrate Edict?"
        subtitle="Contact sales to get custom enterprise pricing for Edict or schedule a live demo."
        primaryButtonText="Contact Sales"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
