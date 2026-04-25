"use client";

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const links = {
    Services: [
        { name: "Web / Mobile", href: "/services" },
        { name: "AI Solutions", href: "/services" },
        { name: "Augmentation", href: "/staff-augmentation" },
        { name: "Cloud Ops", href: "/services" }
    ],
    Company: [
        { name: "Our Story", href: "/about" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Insights Hub", href: "/insights" },
        { name: "Elite Careers", href: "/careers" }
    ],
    Legal: [
        { name: "Privacy Protocol", href: "/privacy-policy" },
        { name: "Terms of Intel", href: "/terms" },
        { name: "Ethics Policy", href: "/about" }
    ]
  };

  return (
    <footer className="bg-background-primary border-t border-text-primary/10 pt-20 pb-10">
      <div className="container px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
                <img src="/PDSLogo.png" className="w-16 h-16 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" alt="Logo" />
            </Link>
            <p className="text-text-secondary text-base leading-relaxed max-w-sm font-medium mb-10">
                Architecting the autonomous future through elite engineering, custom neural networks, and mission-critical digital transformation.
            </p>
            <div className="flex gap-4">
                {[FaLinkedin, FaInstagram, FaFacebook].map((Icon, i) => (
                    <Link key={i} href="#" className="w-10 h-10 border border-text-primary/10 flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan transition-all rounded-lg">
                        <Icon className="text-xl" />
                    </Link>
                ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
                <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-text-primary mb-8">// {title}</h4>
                <ul className="flex flex-col gap-4">
                    {items.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="text-text-secondary hover:text-neon-cyan text-sm font-bold transition-colors uppercase tracking-widest">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-text-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text-primary/40">
                &copy; {new Date().getFullYear()} PDS / MISSION-CRITICAL INTELLIGENCE
            </p>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-text-primary/40">OPERATIONAL STATUS: NOMINAL</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
