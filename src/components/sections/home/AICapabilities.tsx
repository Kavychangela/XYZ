"use client";

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { HiOutlineBolt, HiOutlineChatBubbleBottomCenterText, HiOutlineUserGroup, HiOutlineCpuChip } from 'react-icons/hi2';

export default function AICapabilities() {
  const capabilities = [
    { title: "Conversation Systems", desc: "Context-aware LLM bots resolving 80% of support load.", icon: <HiOutlineChatBubbleBottomCenterText /> },
    { title: "Agentic Workflows", desc: "Multi-tool agents capable of independent reasoning.", icon: <HiOutlineCpuChip /> },
    { title: "WhatsApp Automation", desc: "Direct-to-customer flows for sales and support.", icon: <HiOutlineBolt /> },
    { title: "Industrial Vision", desc: "Real-time image analysis and OCR at scale.", icon: <HiOutlineUserGroup /> },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background-secondary/30 border-b border-text-primary/5">
      <div className="container px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-neon-purple"></div>
                <span className="text-neon-purple font-outfit text-xs font-bold uppercase tracking-[0.4em]">Enterprise Intelligence</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8 text-text-primary">
              AI THAT <br/>
              <span className="text-gradient">THINKS & ACTS.</span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-12 max-w-xl font-medium">
              We architect custom brains for your operations. Combining 13+ years of 
              software excellence with state-of-the-art Agentic frameworks to deliver 
              unmatched efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {capabilities.map((cap, i) => (
                <div key={i} className="group p-6 bg-text-primary/[0.02] border border-text-primary/10 hover:bg-text-primary/[0.04] transition-all rounded-2xl">
                  <div className="text-neon-purple text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {cap.icon}
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-text-primary group-hover:text-neon-purple transition-colors">{cap.title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

            <Button href="/contact" variant="primary" className="px-10 py-4 text-base skew-x-[-12deg] rounded-none">
                <span className="skew-x-[12deg]">Deploy Intelligence</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
                 {/* Radial Glows */}
                 <div className="absolute inset-0 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse"></div>
                 
                 {/* Visual AI Core */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full border border-text-primary/10 p-4 rounded-3xl">
                        <div className="w-full h-full border-t-2 border-r-2 border-neon-cyan/30 flex items-center justify-center relative overflow-hidden bg-background-primary/50 rounded-2xl">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neon-purple/5 rounded-full blur-[80px]"></div>
                            
                            <div className="text-center">
                                <h3 className="text-6xl md:text-8xl font-black text-text-primary/15 tracking-tighter mb-0">CORE</h3>
                                <div className="h-[2px] w-32 bg-gradient-to-r from-neon-cyan via-neon-purple to-transparent mx-auto"></div>
                                <span className="text-[10px] uppercase font-black tracking-[0.6em] text-text-secondary block mt-4">Agentic Engine v2.0</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industrial Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-purple"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
