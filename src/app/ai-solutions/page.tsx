"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import { HiOutlineChatBubbleLeftRight, HiOutlineEye, HiOutlineServerStack, HiOutlineAcademicCap, HiOutlineShieldCheck, HiOutlineCircleStack } from 'react-icons/hi2';

export default function AISolutionsPage() {
  const aiTypes = [
    //conversational agents by kavy changes
    
    {
      title: "Conversational Agents",
      desc: "LLMs trained on your proprietary data capable of understanding deep context, resolving tier-1 and tier-2 support tickets, and executing API calls autonomously. Our agents retain memory across sessions for a truly human-like experience.",
      icon: <HiOutlineChatBubbleLeftRight />,
      glowColor: "cyan" as const
    },
    {
      title: "Computer Vision",
      desc: "Real-time object detection, quality control anomaly checking, and OCR pipelines scanning unstructured documents into structured JSON data. We specialize in industrial defect detection and automated medical imaging analysis.",
      icon: <HiOutlineEye />,
      glowColor: "purple" as const
      // hello
    },
    {
      title: "Workflow Automation",
      desc: "Background AI workers that categorize emails, generate CRM summaries, and trigger Zapier/Make webhooks without human intervention. Save up to 40 hours per week of manual data entry for your sales and ops teams.",
      icon: <HiOutlineServerStack />,
      glowColor: "cyan" as const
    }
  ];

  const features = [
    { title: "RAG & Long-term Memory", desc: "Using Pinecone and Milvus vector databases to give your AI a permanent memory of your entire knowledge base.", icon: <HiOutlineCircleStack /> },
    { title: "Enterprise Security", desc: "SOC2 compliant deployments. Your data never leaves your environment or is used to train public models.", icon: <HiOutlineShieldCheck /> },
    { title: "Continuous Learning", desc: "Models that self-correct and improve based on human feedback loops and reinforcement learning.", icon: <HiOutlineAcademicCap /> },
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '150px' }}>
        <div className="container">
          <SectionHeading
            title="Artificial Intelligence Solutions"
            subtitle="Go beyond basic APIs. We build context-aware autonomous agents, complex RAG pipelines, and Vision AI tailored tightly to your data."
            gradient
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {aiTypes.map((ai, index) => (
              <Card key={index} delay={index * 0.2} glowColor={ai.glowColor}>
                <div style={{ fontSize: '2.5rem', color: ai.glowColor === 'cyan' ? 'var(--neon-cyan)' : 'var(--neon-purple)', marginBottom: '1rem' }}>
                  {ai.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{ai.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{ai.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="section bg-secondary">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Core Capabilities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--border-glass)', borderRadius: '20px', background: 'var(--bg-glass)' }}>
                <div style={{ fontSize: '2rem', color: 'var(--neon-cyan)', marginBottom: '1rem' }}>{f.icon}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Deploy Your First AI Agent"
        subtitle="Book a demo to see our intelligent solutions automating real-world tasks."
      />
    </>
  );
}
