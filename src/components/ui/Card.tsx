"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: 'cyan' | 'purple' | 'none';
  id?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', delay = 0, glowColor = 'none', id, style }: CardProps) {
  const glowStyles = {
    cyan: 'shadow-[var(--glow-cyan)]',
    purple: 'shadow-[var(--glow-purple)]',
    none: ''
  };
  const glowClass = glowStyles[glowColor];
  
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card p-6 ${glowClass} ${className}`}
      style={{ padding: '2rem', ...style }}
    >
      {children}
    </motion.div>
  );
}
