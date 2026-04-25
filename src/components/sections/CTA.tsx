"use client";

import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface CTAProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

export default function CTA({ 
  title = "Ready to Transform Your Business?", 
  subtitle = "Book a free demo and discover how our AI solutions can accelerate your growth.",
  primaryButtonText = "Book Demo",
  primaryButtonLink = "/contact"
}: CTAProps) {
  return (
    <section className="section bg-background-primary py-24 md:py-32 overflow-hidden border-t border-text-primary/5">
      <div className="container px-6 sm:px-8">
        <motion.div 
          className="relative bg-text-primary/[0.02] border border-text-primary/10 p-8 md:p-24 overflow-hidden rounded-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Backgound Grid */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-8 text-text-primary">
                    {title}
                </h2>
                <p className="text-text-secondary text-base md:text-xl font-bold uppercase tracking-[0.2em] mb-8 md:mb-12">
                    {subtitle}
                </p>
                <Button href={primaryButtonLink} variant="primary" className="px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl skew-x-[-12deg] rounded-none w-full sm:w-auto">
                    <span className="skew-x-[12deg]">{primaryButtonText}</span>
                </Button>
            </div>

            <div className="hidden lg:flex justify-end opacity-5 dark:opacity-10 pointer-events-none select-none">
                 <h1 className="text-[20rem] font-black leading-none tracking-tighter text-text-primary">
                    PDS
                 </h1>
            </div>
          </div>

          {/* Corner Decors */}
          <div className="absolute top-0 right-0 w-32 h-[2px] bg-neon-cyan sm:block hidden"></div>
          <div className="absolute top-0 right-0 h-32 w-[2px] bg-neon-cyan sm:block hidden"></div>
        </motion.div>
      </div>
    </section>
  );
}
