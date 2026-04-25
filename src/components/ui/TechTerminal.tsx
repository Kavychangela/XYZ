"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const codeLines = [
  { text: "➜ ~ init pds-ai-agent --env production", color: "text-text-primary" },
  { text: "▹ Loading neural weights...", color: "text-neon-cyan" },
  { text: "▹ Establishing cloud connection [AWS-EAST-1]", color: "text-neon-cyan" },
  { text: "✔ System Online: v2.4.9-stable", color: "text-green-400" },
  { text: "", color: "text-text-primary" },
  { text: "const PDS = {", color: "text-neon-purple" },
  { text: "  mission: 'Empowering enterprise with AI',", color: "text-text-primary" },
  { text: "  tech: ['Next.js', 'PyTorch', 'Serverless'],", color: "text-text-primary" },
  { text: "  uptime: '99.9%',", color: "text-text-primary" },
  { text: "};", color: "text-neon-purple" },
  { text: "", color: "text-text-primary" },
  { text: "➜ PDS deployed successfully 🚀", color: "text-neon-cyan" },
];

export default function TechTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < codeLines.length ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[600px] aspect-video glass-panel rounded-xl overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl bg-background-code/40 backdrop-blur-xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-text-primary/5 border-b border-black/10 dark:border-text-primary/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 text-center text-[10px] uppercase tracking-widest text-text-primary/30 font-mono">
          pds-intelligence-console
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm sm:text-base overflow-hidden">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`mb-1 ${line.text === "" ? "h-4" : ""} ${line.color}`}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < codeLines.length && (
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-5 bg-neon-cyan align-middle ml-1"
          />
        )}
      </div>

      {/* Decorative Glows */}
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-neon-cyan/10 to-neon-purple/10 opacity-50 blur-xl -z-10" />
    </div>
  );
}
