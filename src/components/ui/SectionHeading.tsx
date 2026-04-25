"use client";

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  gradient = false, 
  align = 'center',
  className = '' 
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-24 ${className}`} style={{ textAlign: align }}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "circOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-text-primary/20 to-transparent w-full mb-12"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6 ${gradient ? 'text-gradient' : 'text-text-primary'}`}
        >
          {title}
        </h2>
        
        {subtitle && (
          <p
            className="text-text-secondary text-sm md:text-lg uppercase tracking-[0.2em] max-w-2xl font-bold"
            style={{ margin: align === 'center' ? '0 auto' : '0' }}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
