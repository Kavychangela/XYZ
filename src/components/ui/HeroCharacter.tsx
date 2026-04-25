"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import DataConfetti from './DataConfetti';

export default function HeroCharacter() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
      {/* Background Animation (Behind the man) */}
      <DataConfetti />
      
      {/* Character Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full h-full"
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel shadow-2xl">
          <Image
            src="/hero-character.png"
            alt="Futuristic AI Architect"
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Subtle Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          {/* Neon Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan opacity-20 blur-3xl rounded-full translate-x-12 -translate-y-12" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple opacity-20 blur-3xl rounded-full -translate-x-12 translate-y-12" />
        </div>
      </motion.div>
      
      {/* Floating Elements (Front) */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 z-20 glass-card p-4 text-xs font-mono text-neon-cyan border border-neon-cyan/30"
      >
        AI_MODEL_ACTIVE
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-10 z-20 glass-card p-4 text-xs font-mono text-neon-purple border border-neon-purple/30"
      >
        NEURAL_LAYER_v2
      </motion.div>
    </div>
  );
}
