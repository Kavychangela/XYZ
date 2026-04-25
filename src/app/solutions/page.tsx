"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import { HiOutlineBuildingOffice2, HiOutlineBanknotes, HiOutlineHeart, HiOutlineShoppingCart, HiCheck } from 'react-icons/hi2';
import Link from 'next/link';

export default function SolutionsPage() {
  const industries = [
    {
      title: "Finance & Banking",
      description: "Automated fraud detection algorithms and real-time risk assessment leveraging predictive analytics.",
      icon: <HiOutlineBanknotes />,
      features: ["Risk Modeling", "High-Frequency Trading AI", "Regulatory Compliance"]
    },
    {
      title: "Healthcare",
      description: "Secure HIPAA compliant data pipelines and AI-assisted diagnostic tools for modern medical facilities.",
      icon: <HiOutlineHeart />,
      features: ["Patient Data Triage", "Medical Imaging AI", "Predictive Diagnostics"]
    },
    {
      title: "Retail & E-Commerce",
      description: "Hyper-personalized recommendation engines and supply chain optimization for massive scale.",
      icon: <HiOutlineShoppingCart />,
      features: ["Inventory Automation", "Dynamic Pricing AI", "Customer Sentiment"]
    },
    {
      title: "Enterprise Architecture",
      description: "Consolidate legacy systems into a modern microservices framework powered by intelligent gateways.",
      icon: <HiOutlineBuildingOffice2 />,
      features: ["Legacy Migration", "Microservices", "API Management"]
    }
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '150px' }}>
        <div className="container">
          <SectionHeading 
            title="Industry Solutions" 
            subtitle="Tailored technological integrations matching the rigorous demands of specialized industries."
            gradient
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            {industries.map((ind, i) => (
              <Link href="/case-studies" key={i} className="group" style={{ display: 'block', textDecoration: 'none' }}>
                <Card glowColor={i % 2 === 0 ? 'cyan' : 'purple'} style={{ position: 'relative', overflow: 'hidden', height: '100%', transition: 'transform 0.3s ease' }}>
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '10rem', opacity: 0.05, color: i % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-purple)', transform: 'rotate(-15deg)' }}>
                    {ind.icon}
                  </div>
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ fontSize: '2.5rem', color: i % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-purple)' }}>
                          {ind.icon}
                        </div>
                        <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{ind.title}</h3>
                      </div>
                      <div className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: i % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-purple)' }}>
                         →
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', flexGrow: 1 }}>
                      {ind.description}
                    </p>
                    <div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {ind.features.map((feat, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            <HiCheck style={{ color: i % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-purple)' }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <SectionHeading 
            title="Cross-Functional Use Cases" 
            subtitle="Solve core operational challenges regardless of your domain."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
             {[
               { name: "Customer Support Automation", stat: "80%", statLabel: "Tickets Resolved by AI", desc: "Train our custom LLMs on your company data to resolve basic inquiries instantly, escalating only complex issues to human agents." },
               { name: "Predictive Lead Generation", stat: "3x", statLabel: "Higher Conversion Rates", desc: "Identify high-value prospects dynamically based on deep behavioral analytics rather than manual qualification." }
             ].map((useCase, idx) => (
               <div key={idx} style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', background: 'var(--bg-glass)', padding: '3rem', borderRadius: '16px', border: 'var(--border-glass)' }}>
                  <div style={{ flex: '1 1 400px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{useCase.name}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{useCase.desc}</p>
                  </div>
                  <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '200px', padding: '2rem', background: 'var(--bg-surface)', borderRadius: '12px', border: 'var(--border-glass)' }}>
                    <h4 style={{ fontSize: '4rem', color: 'var(--neon-cyan)', margin: 0, lineHeight: 1 }}>{useCase.stat}</h4>
                    <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginTop: '0.5rem' }}>{useCase.statLabel}</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Architect Your Solution?" 
        subtitle="Schedule a deep-dive technical consultation with our solution engineering team."
        primaryButtonText="Book Consultation"
        primaryButtonLink="/contact"
      />
    </>
  );
}
