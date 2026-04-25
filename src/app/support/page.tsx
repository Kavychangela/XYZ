"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import { HiOutlineLifebuoy, HiOutlineChatBubbleLeftRight, HiOutlineDocumentText, HiOutlinePhone } from 'react-icons/hi2';

export default function SupportPage() {
  const supportOptions = [
    {
      title: "24/7 Live Chat",
      description: "Connect instantly with our AI-powered assistants and dedicated human support agents for immediate resolution.",
      icon: <HiOutlineChatBubbleLeftRight />,
      actionText: "Start Chat"
    },
    {
      title: "Dedicated Phone Support",
      description: "Enterprise clients get direct access to their assigned technical account managers and solution architects.",
      icon: <HiOutlinePhone />,
      actionText: "Call Now"
    },
    {
      title: "Help Center & Documentation",
      description: "Explore our comprehensive API references, setup guides, and best practice documentation.",
      icon: <HiOutlineDocumentText />,
      actionText: "View Docs"
    },
    {
      title: "Community Forum",
      description: "Join discussions, share implementation strategies, and learn from other enterprise developers.",
      icon: <HiOutlineLifebuoy />,
      actionText: "Join Community"
    }
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '150px' }}>
        <div className="container">
          <SectionHeading 
            title="Premium Support" 
            subtitle="We ensure your systems stay online and optimized. Get the help you need precisely when you need it."
            gradient
          />
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginTop: '4rem' 
          }}>
            {supportOptions.map((item, i) => (
              <Card key={i} glowColor="cyan" className="support-card">
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem' }}>
                  <div style={{ fontSize: '3rem', color: 'var(--neon-cyan)' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', flexGrow: 1, lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                  <button 
                    className="px-6 py-2.5 rounded-lg border border-border-subtle bg-bg-glass font-semibold hover:bg-bg-glass-hover transition-all text-left w-fit mt-auto"
                    style={{ color: 'var(--neon-cyan)' }}
                  >
                    {item.actionText} →
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: 'var(--border-glass)', textAlign: 'center' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-gradient">Service Level Agreements (SLA)</h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', marginBottom: '2.5rem' }}>
               Our Enterprise Tier includes a robust SLA guaranteeing 99.99% uptime, 15-minute critical response times, and dedicated architecture reviews.
             </p>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ background: 'var(--bg-glass)', padding: '1.5rem 3rem', borderRadius: '20px' }}>
                  <h4 style={{ fontSize: '2.5rem', color: 'var(--neon-cyan)', margin: 0 }}>99.99%</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Guaranteed Uptime</p>
                </div>
                <div style={{ background: 'var(--bg-glass)', padding: '1.5rem 3rem', borderRadius: '20px' }}>
                  <h4 style={{ fontSize: '2.5rem', color: 'var(--neon-purple)', margin: 0 }}>&lt; 15 min</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Critical Response</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Need Custom Enterprise Support?" 
        subtitle="Talk to our sales team to draft a custom SLA tailored to your unique requirements."
        primaryButtonText="Contact Sales"
        primaryButtonLink="/contact"
      />
    </>
  );
}
