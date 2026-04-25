"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Button from '@/components/ui/Button';
import { HiOutlineRocketLaunch, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineArrowRight, HiXMark } from 'react-icons/hi2';

interface Position {
  id: string;
  title: string;
  type: string;
  location: string;
  category: string;
  description: string;
  skills: string[];
  responsibilities: string[];
}

const positions = [
  {
    id: "PDS-TECH-01",
    title: "Senior Backend (Java / Go)",
    type: "Full-time",
    location: "Remote / Hybrid",
    category: "Engineering",
    description: "Architect and build high-performance backend systems leveraging Java and Golang. You will focus on distributed systems, AI integration, and mission-critical cloud infrastructure.",
    skills: ["Java", "Golang", "AWS", "K8s", "GenAI", "gRPC"],
    responsibilities: [
      "Design scalable backend architectures",
      "Lead migration to cloud-native stacks",
      "Integrate neural networks into core pipelines",
      "Mentor junior engineering talent",
      "Maintain 99.9% system uptime"
    ]
  },
  {
    id: "PDS-AI-01",
    title: "AI Research Engineer",
    type: "Core Team",
    location: "Global Remote",
    category: "Artificial Intelligence",
    description: "Join our elite AI vertical to develop custom LLMs and RAG systems. You will bridge the gap between research and production-grade autonomous agents.",
    skills: ["Python", "PyTorch", "RAG", "LLMOps", "Vector DBs"],
    responsibilities: [
      "Train and fine-tune specialized models",
      "Optimize inference latency for real-time apps",
      "Research next-gen agentic workflows",
      "Draft technical whitepapers"
    ]
  },
  {
    id: "PDS-DATA-01",
    title: "Full-Stack Developer (MERN)",
    type: "Full-time",
    location: "Hybrid (Pune)",
    category: "Product",
    description: "Build the next generation of our flagship products like Edict AI and Edex. Focus on immersive UIs and robust Node.js backends.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Tailwind"],
    responsibilities: [
      "Develop end-to-end product features",
      "Ensure pixel-perfect mobile responsiveness",
      "Collaborate with UX designers on animations",
      "Implement secure authentication protocols"
    ]
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Position | null>(null);

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
            <SectionHeading 
                title="Elite Careers" 
                subtitle="We are looking for the top 1% of visionaries, engineers, and designers."
                gradient
                align="left"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-text-primary">
                        Build the <br /><span className="text-gradient">AUTONOMOUS</span> Future.
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 font-medium">
                        At PDS, we don't just write code; we architect ecosystems. Join a culture of radical ownership where every line of code pushes the boundaries of human potential.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {["Innovation", "Ownership", "Transparency"].map((tag) => (
                            <span key={tag} className="px-6 py-2 border border-text-primary/10 text-xs font-black uppercase tracking-widest text-text-primary/60">
                                # {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { title: "Remote First", icon: <HiOutlineRocketLaunch />, desc: "Work from anywhere in the world." },
                        { title: "Global Impact", icon: <HiOutlineLightBulb />, desc: "Projects for Fortune 500 partners." }
                    ].map((card, i) => (
                        <div key={i} className="p-8 border border-text-primary/10 bg-text-primary/[0.02] rounded-3xl">
                            <div className="text-3xl text-neon-cyan mb-4">{card.icon}</div>
                            <h4 className="text-lg font-black uppercase tracking-tighter mb-2 text-text-primary">{card.title}</h4>
                            <p className="text-text-secondary text-sm font-medium">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <SectionHeading 
                title="Open Missions" 
                subtitle="Select your next challenge and join our squad."
                align="left"
            />

            <div className="grid grid-cols-1 gap-4 mt-12">
                {positions.map((pos, i) => (
                    <motion.div
                        key={i}
                        className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-text-primary/10 hover:border-neon-cyan transition-colors cursor-pointer bg-background-secondary/20 rounded-2xl"
                        onClick={() => setSelectedJob(pos)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[10px] font-black text-neon-purple uppercase tracking-[0.3em]">[{pos.category}]</span>
                                <span className="text-[9px] font-mono text-text-primary/40 uppercase">{pos.id}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-text-primary group-hover:text-neon-cyan transition-colors">{pos.title}</h3>
                            <div className="flex gap-4 mt-4 text-text-secondary text-xs font-black uppercase tracking-widest">
                                <span>{pos.location}</span>
                                <span className="text-text-primary/20">/</span>
                                <span>{pos.type}</span>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] group-hover:text-neon-cyan transition-all">
                            OPERATIONAL DETAILS <span className="translate-x-0 group-hover:translate-x-3 transition-transform">→</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Modal - Fully Responsive */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-background-primary/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            />
            <motion.div 
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto hide-scrollbar bg-background-primary border border-text-primary/10 p-8 md:p-16 rounded-[40px]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <button 
                className="absolute top-6 right-6 text-3xl text-text-primary hover:text-neon-cyan transition-colors"
                onClick={() => setSelectedJob(null)}
              >
                <HiXMark />
              </button>

              <div className="mb-12">
                <span className="text-xs font-black text-neon-cyan uppercase tracking-[0.4em] mb-4 block">[{selectedJob.category}]</span>
                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none text-text-primary">{selectedJob.title}</h2>
                <div className="flex gap-6 text-text-secondary font-black uppercase tracking-widest text-xs">
                  <span>{selectedJob.location}</span>
                  <span>{selectedJob.type}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-12">
                  <div>
                    <h4 className="text-xs font-black uppercase text-text-primary tracking-[0.4em] mb-6">// MISSION BRIEF</h4>
                    <p className="text-text-secondary text-lg leading-relaxed font-medium">
                      {selectedJob.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase text-text-primary tracking-[0.4em] mb-6">// RESPONSIBILITIES</h4>
                    <ul className="space-y-4">
                      {selectedJob.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-4 text-text-secondary font-medium">
                          <span className="text-neon-cyan">✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-10">
                  <div className="p-8 border border-text-primary/10 bg-text-primary/[0.02] rounded-2xl">
                    <h4 className="text-xs font-black uppercase text-text-primary tracking-[0.2em] mb-6">SKILLSET REQUIRED</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 border border-text-primary/10 text-[10px] font-black uppercase text-text-primary/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button href={`mailto:info@proserindustries.com?subject=Application [${selectedJob.id}] ${selectedJob.title}`} variant="primary" className="w-full py-5 text-lg skew-x-[-12deg] rounded-none">
                      <span className="skew-x-[12deg]">INITIATE APPLICATION</span>
                    </Button>
                    <p className="text-center text-[10px] font-black uppercase text-text-primary/20 tracking-widest leading-loose">
                      Protocol ID: {selectedJob.id} <br />
                      Reference: INF-CAREER-SQUAD
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTA 
        title="No Direct Match?" 
        subtitle="We always have room for elite operators. Send your technical dossier for manual review." 
        primaryButtonText="General Dossier"
        primaryButtonLink="mailto:info@proserindustries.com"
      />
    </div>
  );
}
