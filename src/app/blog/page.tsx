"use client";

import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';

const articles = [
  {
    title: "The Machine Learning Handbook: Key Concepts Explained Simply",
    category: "AI",
    date: "Jan 15, 2024",
    excerpt: "Master the core concepts of machine learning — from supervised learning to neural networks — with clear, beginner-friendly explanations.",
    url: "https://www.freecodecamp.org/news/machine-learning-handbook/"
  },
  {
    title: "A Beginner's Guide to Large Language Models",
    category: "AI",
    date: "Feb 10, 2024",
    excerpt: "Understand the architecture, training, and real-world applications of LLMs transforming the modern software landscape.",
    url: "https://www.freecodecamp.org/news/a-beginners-guide-to-large-language-models/"
  },
  {
    title: "How to Build AI Apps with ChatGPT, DALL-E and GPT-4",
    category: "AI",
    date: "Mar 22, 2024",
    excerpt: "A practical guide to building production-ready AI-powered applications using OpenAI's most powerful APIs.",
    url: "https://www.freecodecamp.org/news/build-ai-apps-with-chatgpt-dall-e-and-gpt-4/"
  },
  {
    title: "React Server Components Explained",
    category: "Development",
    date: "Apr 01, 2024",
    excerpt: "Learn how React Server Components fundamentally change the way we build and render modern web applications.",
    url: "https://www.freecodecamp.org/news/react-server-components/"
  },
  {
    title: "Next.js Tutorial – Build Your First Next.js App",
    category: "Development",
    date: "May 08, 2024",
    excerpt: "A comprehensive tutorial on building full-stack web apps with Next.js, including routing, API routes, and deployment.",
    url: "https://www.freecodecamp.org/news/nextjs-tutorial/"
  },
  {
    title: "CSS Flexbox Tutorial with Cheatsheet",
    category: "Development",
    date: "Jun 14, 2024",
    excerpt: "Master CSS Flexbox layouts with this in-depth tutorial and handy reference cheatsheet for modern UI design.",
    url: "https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/"
  },
  {
    title: "Git and GitHub for Beginners — Crash Course",
    category: "Development",
    date: "Jul 20, 2024",
    excerpt: "Learn version control from the ground up. Covers branching, merging, pull requests, and collaboration workflows.",
    url: "https://www.freecodecamp.org/news/git-and-github-for-beginners/"
  },
  {
    title: "What is Cloud Computing? A Beginner's Guide",
    category: "SaaS",
    date: "Aug 05, 2024",
    excerpt: "Explore the fundamentals of cloud computing — IaaS, PaaS, SaaS — and how it powers today's enterprise software.",
    url: "https://www.freecodecamp.org/news/what-is-cloud-computing/"
  },
  {
    title: "How the Internet Works — A Deep Dive",
    category: "SaaS",
    date: "Sep 12, 2024",
    excerpt: "From TCP/IP to DNS to HTTP, understand the infrastructure that powers every web application and SaaS product.",
    url: "https://www.freecodecamp.org/news/how-the-internet-works/"
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI' | 'Development' | 'SaaS'>('All');

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const categories: ('All' | 'AI' | 'Development' | 'SaaS')[] = ['All', 'AI', 'Development', 'SaaS'];

  return (
    <>
      <section className="section" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <div className="container">
          <SectionHeading 
            title="Insights & Engineering Blog" 
            subtitle="Deep dives into AI integration, next-gen software architecture, and the future of SaaS."
            gradient
          />

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
             {categories.map((cat) => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`btn btn-outline ${activeCategory === cat ? 'active' : ''}`}
                 style={{ 
                   borderColor: activeCategory === cat ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.1)', 
                   color: activeCategory === cat ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                   background: activeCategory === cat ? 'rgba(0,245,255,0.05)' : 'transparent',
                   boxShadow: activeCategory === cat ? '0 0 15px rgba(0,245,255,0.1)' : 'none'
                 }}
               >
                 {cat}
               </button>
             ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
             {filteredArticles.map((article, index) => (
                <Card key={article.title} delay={index * 0.1}>
                   <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                       <span style={{ color: 'var(--neon-purple)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{article.category}</span>
                       <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{article.date}</span>
                     </div>
                     <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.4, fontWeight: 700 }}>{article.title}</h3>
                     <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6, flexGrow: 1 }}>{article.excerpt}</p>
                     <a 
                       href={article.url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{ 
                         color: 'var(--neon-cyan)', 
                         fontWeight: 'bold', 
                         textDecoration: 'none',
                         display: 'inline-flex',
                         alignItems: 'center',
                         gap: '0.5rem',
                         transition: 'all 0.2s'
                       }}
                       onMouseEnter={e => {
                         (e.currentTarget as HTMLElement).style.textDecoration = 'underline';
                         (e.currentTarget as HTMLElement).style.transform = 'translateX(5px)';
                       }}
                       onMouseLeave={e => {
                         (e.currentTarget as HTMLElement).style.textDecoration = 'none';
                         (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                       }}
                     >
                       Read Article →
                     </a>
                   </div>
                </Card>
             ))}
          </div>
        </div>
      </section>
      <CTA 
        title="Stay Updated" 
        subtitle="Join our newsletter to receive the latest technical insights." 
        primaryButtonText="Subscribe"
        primaryButtonLink="/contact"
      />
    </>
  );
}
