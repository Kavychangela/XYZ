"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import { HiOutlineChatBubbleBottomCenterText, HiOutlineUserGroup, HiOutlineMegaphone } from 'react-icons/hi2';

export default function WhatsAppAutomationPage() {
  const features = [
    {
      title: "Contextual Auto-Replies",
      desc: "LLMs analyze incoming messages to instantly answer FAQs, book appointments, and capture lead data naturally.",
      icon: <HiOutlineChatBubbleBottomCenterText />
    },
    {
      title: "Lead Nurturing",
      desc: "Automated drip campaigns sent directly to users' WhatsApp inboxes, achieving 98% open rates compared to email.",
      icon: <HiOutlineUserGroup />
    },
    {
      title: "Smart Broadcasts",
      desc: "Send personalized rich-media updates and promotions to thousands of opted-in customers securely.",
      icon: <HiOutlineMegaphone />
    }
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '150px' }}>
        <div className="container">
          <SectionHeading 
            title="WhatsApp AI Automation" 
            subtitle="Engage customers directly where they spend their time through intelligent conversational flows connected directly to your CRM."
            gradient
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
             {features.map((feat, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--neon-cyan)', marginBottom: '1rem' }}>
                    {feat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feat.desc}</p>
                </Card>
             ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
           <SectionHeading title="Typical Automation Workflow" />
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ background: 'var(--bg-glass)', border: 'var(--border-glass)', borderRadius: '24px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 'bold' }}>1</div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Customer Trigger</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>User clicks a Facebook Ad opening a WhatsApp conversation.</p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-glass)', border: 'var(--border-glass)', borderRadius: '24px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--neon-purple)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 'bold' }}>2</div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>AI Processing</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>The agent parses the intent, checks product availability via API, and responds.</p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-glass)', border: 'var(--border-glass)', borderRadius: '24px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--neon-cyan)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', fontWeight: 'bold' }}>3</div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>CRM Output</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Lead details and chat summaries are formatted and pushed to Salesforce automatically.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <CTA 
        title="Transform Your Customer Support" 
        subtitle="Let our AI handle the routine queries while you focus on the complex ones." 
      />
    </>
  );
}
