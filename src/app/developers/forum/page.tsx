"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineFire,
  HiOutlineClock,
  HiOutlineCheckBadge,
  HiOutlineMegaphone,
  HiOutlineMagnifyingGlass,
  HiOutlinePlus,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineHandThumbUp,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineUserCircle
} from 'react-icons/hi2';

// --- MOCK FORUM DATA ---

const categories = [
  { name: 'General Discussion', icon: <HiOutlineChatBubbleLeftRight />, count: 124, color: 'var(--neon-cyan)' },
  { name: 'Technical Support', icon: <HiOutlineCheckBadge />, count: 85, color: 'var(--neon-purple)' },
  { name: 'Showcase', icon: <HiOutlineFire />, count: 42, color: 'var(--neon-pink)' },
  { name: 'Feature Requests', icon: <HiOutlineMegaphone />, count: 28, color: '#ffbd2e' },
];

const threads = [
  {
    title: 'How to handle multi-agent task delegation efficiently?',
    author: 'dev_wizard',
    category: 'Technical Support',
    replies: 12,
    likes: 45,
    views: '1.2k',
    time: '2 hours ago',
    isSolved: true,
    tags: ['Agents', 'Orchestration']
  },
  {
    title: 'Edict Vault v2.0 performance benchmarks - 30% faster encryption',
    author: 'pds_engineer',
    category: 'General Discussion',
    replies: 8,
    likes: 112,
    views: '2.5k',
    time: '5 hours ago',
    isSolved: false,
    tags: ['Edict', 'Security', 'Benchmark']
  },
  {
    title: 'Showcase: AI-powered medical transcription tool built with PDS',
    author: 'health_tech_pro',
    category: 'Showcase',
    replies: 24,
    likes: 189,
    views: '4.1k',
    time: '1 day ago',
    isSolved: false,
    tags: ['HealthCare', 'Demo']
  },
  {
    title: 'Question: Webhook retry logic for WhatsApp integration',
    author: 'connect_master',
    category: 'Technical Support',
    replies: 5,
    likes: 8,
    views: '400',
    time: '3 days ago',
    isSolved: false,
    tags: ['Webhooks', 'WhatsApp']
  },
  {
    title: 'RFC: Modular Agent Tooling System',
    author: 'ai_researcher',
    category: 'Feature Requests',
    replies: 15,
    likes: 67,
    views: '1.8k',
    time: '4 days ago',
    isSolved: false,
    tags: ['RFC', 'Architecture']
  }
];

export default function ForumPage() {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Developer <span className="text-gradient">Forum</span></h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.8rem' }}>Join the conversation, solve problems, and share what you're building.</p>
          </div>
          <button style={{ padding: '0.8rem 1.5rem', background: 'var(--neon-cyan)', border: 'none', borderRadius: '10px', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <HiOutlinePlus /> Start Discussion
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 300px', gap: '2.5rem' }}>
          {/* ── Left Sidebar (Categories) ── */}
          <aside>
            <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Categories</h5>
            <nav>
              {categories.map((cat, i) => (
                <button key={i} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', borderRadius: '10px', transition: 'all 0.2s', fontSize: '0.95rem' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <span style={{ fontSize: '1.2rem', color: cat.color }}>{cat.icon}</span>
                  <span style={{ flexGrow: 1, textAlign: 'left' }}>{cat.name}</span>
                  <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>{cat.count}</span>
                </button>
              ))}
            </nav>

            <div style={{ marginTop: '3rem' }}>
              <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Top Contributors</h5>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <HiOutlineUserCircle style={{ fontSize: '2rem', color: i === 1 ? 'var(--neon-cyan)' : 'var(--text-secondary)' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>user_0{i}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{200 - i * 40} points</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* ── Main Thread List ── */}
          <main>
            {/* Thread Filters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              {['Trending', 'Latest', 'Unanswered'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  style={{ background: 'none', border: 'none', color: activeTab === tab.toLowerCase() ? 'var(--neon-cyan)' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer', position: 'relative', fontSize: '1rem' }}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && <motion.div layoutId="tab-pill" style={{ position: 'absolute', bottom: '-17px', left: 0, right: 0, height: '2px', background: 'var(--neon-cyan)' }} />}
                </button>
              ))}
              <div style={{ marginLeft: 'auto', position: 'relative' }}>
                <HiOutlineMagnifyingGlass style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input type="text" placeholder="Search forum..." style={{ padding: '0.5rem 1rem 0.5rem 2.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
            </div>

            {/* List */}
            <div>
              {threads.map((thread, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel" 
                  style={{ padding: '1.5rem', marginBottom: '1rem', cursor: 'pointer', border: '1px solid var(--border-subtle)', position: 'relative' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>{thread.category}</span>
                      {thread.isSolved && <span style={{ fontSize: '0.7rem', color: '#27c93f', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 700 }}><HiOutlineCheckBadge /> Solved</span>}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{thread.time}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.8rem 0', lineHeight: 1.4 }}>{thread.title}</h3>
                  
                  <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.2rem' }}>
                    {thread.tags.map(tag => <span key={tag} style={{ fontSize: '0.7rem', color: 'var(--neon-cyan)', background: 'rgba(0,240,255,0.05)', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>#{tag}</span>)}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      <HiOutlineChatBubbleOvalLeft /> {thread.replies}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      <HiOutlineHandThumbUp /> {thread.likes}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      <HiOutlineEye /> {thread.views}
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{thread.author}</span></span>
                      <HiOutlineUserCircle style={{ fontSize: '1.4rem', color: 'var(--text-secondary)' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>

          {/* ── Right Sidebar (Announcement / Info) ── */}
          <aside>
             <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(0, 240, 255, 0.03)', border: '1px solid rgba(0, 240, 255, 0.1)' }}>
               <h5 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 1rem 0' }}>
                 <HiOutlineFire style={{ color: 'var(--neon-pink)' }} /> Community Updates
               </h5>
               <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                 <li style={{ marginBottom: '1rem' }}>
                   <Link href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Guidelines for Agent showcase</Link>
                   <div style={{ fontSize: '0.75rem', marginTop: '0.2rem' }}>Updated 2 days ago</div>
                 </li>
                 <li style={{ marginBottom: '1rem' }}>
                   <Link href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>PDS v2.4 Patch Notes</Link>
                   <div style={{ fontSize: '0.75rem', marginTop: '0.2rem' }}>Updated 5 days ago</div>
                 </li>
               </ul>
             </div>

             <div style={{ marginTop: '2rem', padding: '1.5rem' }}>
               <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '1rem' }}>Forum Stats</h5>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                 <span style={{ color: 'var(--text-secondary)' }}>Total Threads</span>
                 <span style={{ fontWeight: 700 }}>1,248</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                 <span style={{ color: 'var(--text-secondary)' }}>Total Members</span>
                 <span style={{ fontWeight: 700 }}>4,892</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                 <span style={{ color: 'var(--text-secondary)' }}>Online Now</span>
                 <span style={{ fontWeight: 700, color: '#27c93f' }}>142</span>
               </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
