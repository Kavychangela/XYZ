"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "FinTech Corp",
      industry: "Finance",
      problem: "High manual overhead in processing loan applications, taking 4 days on average.",
      solution: "Implemented an OCR + LLM pipeline to ingest documents and extract data, sending it via webhook to their core platform.",
      tech: ["Next.js", "AWS Textract", "OpenAI GPT-4", "Node.js"],
      results: "Reduced processing time from 4 days to 30 minutes. 92% accurate data mapping.",
      glow: "purple" as const
    },
    {
      client: "MediCare Plus",
      industry: "Healthcare",
      problem: "Patients abandoning booking process due to complex legacy web interface.",
      solution: "Deployed a WhatsApp conversational bot utilizing RAG to check doctor schedules and book appointments securely.",
      tech: ["WhatsApp Business API", "Pinecone", "Express", "React Admin"],
      results: "300% increase in successful bookings. 45% reduction in front-desk call volume.",
      glow: "cyan" as const
    },
    {
      client: "Urban Estates",
      industry: "Real Estate",
      problem: "Agents spending 60% of their time answering repetitive property queries.",
      solution: "A bespoke AI agent on their website answering queries with contextual knowledge of specific listings.",
      tech: ["React", "TailwindCSS", "LangChain", "Vercel"],
      results: "Captured 12,000 leads autonomously in Q3. Generated $4.2M in pipeline value.",
      glow: "none" as const
    }
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '150px' }}>
        <div className="container">
          <SectionHeading 
            title="Case Studies" 
            subtitle="Read about how we've transformed businesses across Healthcare, Finance, Real Estate, and SaaS using Next-Gen tech."
            gradient
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginTop: '4rem' }}>
             {caseStudies.map((study, idx) => (
               <Card key={idx} glowColor={study.glow}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                   <div>
                     <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{study.client}</h2>
                     <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--neon-cyan)' }}>{study.industry}</span>
                   </div>
                   <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                     {study.tech.map((t, i) => (
                       <span key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', border: '1px solid var(--border-glass)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{t}</span>
                     ))}
                   </div>
                 </div>

                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <div>
                      <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Problem</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{study.problem}</p>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Our Solution</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{study.solution}</p>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--neon-purple)' }}>
                      <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>The Results</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 'bold' }}>{study.results}</p>
                    </div>
                 </div>
               </Card>
             ))}
          </div>
        </div>
      </section>
      
      <CTA 
        title="Become Our Next Success Story" 
        subtitle="Schedule a consultation to explore what we can build for you." 
      />
    </>
  );
}
