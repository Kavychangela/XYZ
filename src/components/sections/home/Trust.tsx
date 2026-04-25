"use client";

import { motion } from 'framer-motion';

export default function Trust() {
  const clients = [
    { name: "Reliance Industries" },
    { name: "Muktangan School" },
    { name: "PV Griha" },
    { name: "CA Shinde" },
    { name: "AV Tech" },
    { name: "Iconic Connect" },
    { name: "CA Dahotre" },
    { name: "SBTA Bank" },
    { name: "Anamprem" },
    { name: "Daily Doc" },
    { name: "Relish Food" },
    { name: "Nealife" },
  ];

  const marqueeClients = [...clients, ...clients];

  return (
    <section className="py-24 bg-background-primary overflow-hidden border-b border-text-primary/5">
      <div className="container px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="shrink-0 text-center lg:text-left">
             <h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.4em] text-text-primary whitespace-nowrap">
                CLIENTS $ <br />
                <span className="text-neon-cyan">PARTNERS</span>
             </h2>
          </div>

          <div className="relative flex-grow overflow-hidden pt-4 pb-2 group/marquee">
            <div className="animate-marquee flex items-center gap-12 md:gap-24 py-2">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="font-outfit text-base md:text-xl font-bold text-text-secondary hover:text-text-primary transition-all duration-500 tracking-tighter cursor-default px-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 flex-shrink-0"
                >
                  {client.name}
                </div>
              ))}
            </div>
            
            {/* Masking Gradients */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-background-primary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-background-primary to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .group\/marquee:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
