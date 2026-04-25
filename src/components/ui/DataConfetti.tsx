"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function DataConfetti() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 - 50, // spread around center
      y: Math.random() * 100 - 50,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 3,
      color: Math.random() > 0.5 ? 'var(--neon-cyan)' : 'var(--neon-purple)',
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1000px' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute left-1/2 top-1/2"
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: 0,
            y: 0,
            rotateZ: p.rotation 
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 0.5, 0],
            x: p.x * 6 + "px",
            y: p.y * 6 + "px",
            rotateZ: p.rotation + 180,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            borderRadius: '1px',
          }}
        />
      ))}
      
      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute left-1/2 top-1/2 w-1 h-1 bg-white rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: (Math.random() * 300 - 150) + "px",
            y: (Math.random() * 300 - 150) + "px",
          }}
          transition={{
            duration: Math.random() * 1 + 1,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}
