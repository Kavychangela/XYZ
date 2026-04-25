"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function PremiumBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const glow1X = useTransform(smoothX, (val) => val - 300);
  const glow1Y = useTransform(smoothY, (val) => val - 300);
  
  const glow2X = useTransform(smoothX, (val) => (val - 500) * -0.1);
  const glow2Y = useTransform(smoothY, (val) => (val - 500) * -0.1);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background-primary transition-colors duration-700">
      {/* Dynamic Mouse Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-30 blur-[120px] pointer-events-none"
        style={{
          x: glow1X,
          y: glow1Y,
          background: "radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] right-0 top-0 rounded-full opacity-10 dark:opacity-20 blur-[100px] pointer-events-none"
        style={{
          x: glow2X,
          y: glow2Y,
          background: "radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)",
        }}
      />

      {/* Sophisticated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]" 
        style={{ 
          backgroundImage: `
            linear-gradient(var(--bg-glass) 1px, transparent 1px), 
            linear-gradient(90deg, var(--bg-glass) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-[200%] w-full"
          animate={{ y: ["-50%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Connection Nodes (Constellation) */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1.5 h-1.5 bg-neon-cyan/30 rounded-full blur-[1px]"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="absolute inset-0 bg-neon-cyan rounded-full animate-ping opacity-20" />
          </motion.div>
        ))}
      </div>

      {/* Moving Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-20 dark:opacity-40"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, (Math.random() * -200 - 100) + "px"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      ))}

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-background-secondary to-transparent opacity-50" />
    </div>
  );
}
