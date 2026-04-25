"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import {
  HiOutlineCalendarDays,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineNewspaper,
} from 'react-icons/hi2';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const devResources = [
  {
    icon: <HiOutlineCalendarDays />,
    title: 'Seminars',
    description: 'Upcoming tech and AI workshops. Stay ahead of the curve with our expert-led sessions.',
    cta: 'View Seminars',
    href: '/seminars',
    color: 'var(--neon-purple)',
    id: 'seminars'
  },
  {
    icon: <HiOutlineNewspaper />,
    title: 'Engineering Blog',
    description: 'Deep-dives into our architecture, research papers, and behind-the-scenes engineering learnings.',
    cta: 'Read Blog',
    href: '/blog',
    color: 'var(--neon-cyan)',
    id: 'blog'
  },
];

export default function DevelopersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section" style={{ paddingTop: '150px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
        {/* background glows */}
        <div style={{ position: 'absolute', top: '-200px', left: '-200px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Developer <span className="text-gradient">Resources</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Everything you need to build, learn, and connect with the PDS ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Main Resources ── */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {devResources.map((item, i) => (
              <motion.div key={i} id={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card glowColor={i % 2 === 0 ? 'cyan' : 'purple'} style={{ height: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem', padding: '1rem 0.5rem' }}>
                    <div style={{ fontSize: '3rem', color: item.color }}>{item.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>{item.description}</p>
                    <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        color: item.color,
                        fontSize: '1rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}>
                      {item.cta} <HiOutlineArrowTopRightOnSquare />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Still have questions?"
        subtitle="Our team is here to help you with your integration and architecture."
        primaryButtonText="Contact Support"
        primaryButtonLink="/contact"
      />
    </>
  );
}
// end