"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { HiOutlineArrowRight, HiOutlineCommandLine } from 'react-icons/hi2';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-background-primary">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,var(--neon-cyan),transparent)] opacity-10 dark:opacity-20"></div>
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img 
            src="/hero_visual.png" 
            alt="AI Concept" 
            className="w-full h-full object-cover opacity-20 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-primary/60 to-background-primary"></div>
      </div>

      <div className="container relative z-10 px-6 sm:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <div className="h-[1px] w-8 sm:w-12 bg-neon-cyan sm:block hidden"></div>
                <span className="text-neon-cyan font-outfit text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em]">Next-Gen Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] sm:leading-[0.95] tracking-tighter mb-8 text-center lg:text-left text-text-primary">
              WE BUILD <br />
              <span className="text-gradient">AUTONOMOUS</span> <br />
              FUTURES.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-12 font-outfit font-light italic text-center lg:text-left mx-auto lg:mx-0">
              "Propelling global enterprises through elite AI engineering, custom neural architectures, and high-velocity digital transformation."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <Button href="/contact" variant="primary" className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-none skew-x-[-12deg] transition-all transform hover:skew-x-0">
                <span className="skew-x-[12deg] group-hover:skew-x-0 flex items-center gap-2">
                  START COOPERATING <HiOutlineArrowRight />
                </span>
              </Button>
              
              <Link href="/services" className="group flex items-center gap-4 text-text-primary font-bold tracking-tighter hover:text-neon-cyan transition-colors text-sm sm:text-base">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-text-primary/10 flex items-center justify-center group-hover:border-neon-cyan transition-all">
                    <HiOutlineCommandLine className="text-lg sm:text-xl" />
                </div>
                ENGINEERING VERTICALS
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
