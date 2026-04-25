"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSparkles, HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const menuData = {
    Projects: [
      {
        title: "Flagship Builds",
        links: [
          { label: "Pal Property", href: "/projects", description: "Real estate platform with agent connections." },
          { label: "Paintlib", href: "/projects", description: "Corporate digital storefront & catalog." },
          { label: "RJ Consultancy", href: "/projects", description: "Business consulting & scheduling platform." },
        ]
      },
      {
        title: "More Portfolio",
        links: [
          { label: "MGM Marketplace", href: "/projects", description: "E-commerce platform for buyers & sellers." },
          { label: "Daily Doc (USA)", href: "/projects", description: "HIPAA-compliant healthcare SaaS." },
          { label: "Game App", href: "/projects", description: "Flutter-based multi-game mobile app." },
        ]
      }
    ],
    Services: [
      {
        title: "Verticals",
        links: [
          { label: "AI Solutions", href: "/services#ai", description: "Custom LLMs & Autonomous Agents." },
          { label: "Specialized Apps", href: "/services#specialized", description: "ERP, SAP & Legacy Refactoring." },
          { label: "Staff Augmentation", href: "/staff-augmentation", description: "Top 1% engineers for your team." },
        ]
      }
    ],
    Insights: [
      {
        title: "Resources",
        links: [
          { label: "Success Stories", href: "/success-stories", description: "Detailed client case studies." },
          { label: "Engineering Blog", href: "/blog", description: "Technical deep-dives & updates." },
          { label: "Seminars", href: "/seminars", description: "Upcoming tech & AI workshops." },
        ]
      }
    ]
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 py-6 ${scrolled
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-white/10 dark:border-white/5 py-4 shadow-xl'
        : ''
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-outfit text-2xl font-extrabold flex items-center gap-2 tracking-tight group">
            <img src="/PDSLogo.png" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" alt="Logo" />
            {/* <span className="text-gradient">PDS</span> */}
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {/* Products - plain link, no dropdown */}
            <Link
              href="/products"
              className={`font-medium text-[0.95rem] px-4 py-2 rounded-lg transition-colors hover:bg-white/5 dark:hover:bg-white/5 hover:text-neon-cyan ${
                typeof window !== 'undefined' && window.location.pathname === '/products' ? 'text-neon-cyan' : 'text-text-primary'
              }`}
            >
              Products
            </Link>

            {Object.keys(menuData).map((menu) => (
              <div
                key={menu}
                className="relative py-2"
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={`/${menu.toLowerCase()}`}
                  className={`font-medium text-[0.95rem] flex items-center gap-1 cursor-pointer transition-colors px-4 py-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 ${activeMenu === menu ? 'text-neon-cyan bg-white/5 dark:bg-white/5' : 'text-text-primary'
                    }`}
                >
                  {menu} <HiChevronDown className={`text-xs transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
                </Link>
                <MegaMenu
                  isOpen={activeMenu === menu}
                  onClose={() => setActiveMenu(null)}
                  title={menu}
                  sections={menuData[menu as keyof typeof menuData]}
                />
              </div>
            ))}
            <Link href="/careers" className="font-medium text-[0.95rem] px-4 py-2 rounded-lg text-text-primary hover:bg-white/5 hover:text-neon-cyan transition-colors">Careers</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            {/* <Link href="/contact" className="px-6 py-2.5 rounded-lg border border-white/10 dark:border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-all">
              Sign in
            </Link> */}
            <Link href="/contact" className="px-6 py-2.5 rounded-lg bg-neon-cyan text-black font-bold shadow-lg shadow-neon-cyan/20 hover:scale-105 active:scale-95 transition-all">
              Contact us
            </Link>
          </div>

          <button className="lg:hidden text-3xl text-gray-700 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-white dark:bg-[#0a0a0c] z-[999] pt-24"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="p-8 flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <ThemeToggle />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-3xl text-gray-500"><HiX /></button>
              </div>
              <div className="flex flex-col gap-6">
                {['Home', 'Products', 'Projects', 'Services', 'Insights', 'Success Stories', 'Staff Augmentation', 'Careers', 'About'].map((item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-xl md:text-2xl font-semibold font-outfit text-gray-800 dark:text-white"
                  >
                    {item}
                  </Link>
                ))}
                <Link href="/contact" className="mt-4 px-8 py-4 rounded-xl bg-neon-cyan text-black font-bold text-center text-xl">Connect Now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
