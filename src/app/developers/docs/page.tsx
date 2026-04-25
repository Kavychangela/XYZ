"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  HiOutlineBookOpen,
  HiOutlineKey,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
  HiOutlineCloud,
  HiOutlineChatBubbleLeftRight,
  HiOutlineMagnifyingGlass,
  HiOutlineChevronRight,
  HiOutlineInformationCircle,
  HiOutlineCodeBracket,
} from 'react-icons/hi2';

// --- MOCK DOCS DATA ---

const sections = [
  {
    id: 'intro',
    title: 'Getting Started',
    icon: <HiOutlineBookOpen />,
    pages: [
      { id: 'overview', title: 'Platform Overview' },
      { id: 'quickstart', title: 'Quickstart Guide' },
      { id: 'auth', title: 'Authentication' },
    ]
  },
  {
    id: 'agents',
    title: 'AI Agents',
    icon: <HiOutlineCpuChip />,
    pages: [
      { id: 'agent-creation', title: 'Creating Agents' },
      { id: 'running-tasks', title: 'Running Tasks' },
      { id: 'context-management', title: 'Context & Memory' },
    ]
  },
  {
    id: 'edict',
    title: 'Edict Security',
    icon: <HiOutlineShieldCheck />,
    pages: [
      { id: 'vault-setup', title: 'Vault Setup' },
      { id: 'encryption', title: 'Smart Encryption' },
      { id: 'sharing', title: 'Zero-Knowledge Sharing' },
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: <HiOutlineCloud />,
    pages: [
      { id: 'dropbox', title: 'Dropbox Sync' },
      { id: 'whatsapp', title: 'WhatsApp Automation' },
    ]
  }
];

const docContent: Record<string, any> = {
  overview: {
    title: 'Platform Overview',
    content: (
      <>
        <p>The PDS Developer Platform provides a suite of high-level APIs and SDKs designed to bridge the gap between complex AI models and enterprise workflows.</p>
        <div style={{ padding: '1.5rem', background: 'rgba(0, 240, 255, 0.05)', borderLeft: '4px solid var(--neon-cyan)', borderRadius: '8px', margin: '2rem 0' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '0 0 0.8rem 0', color: 'var(--neon-cyan)' }}>
            <HiOutlineInformationCircle /> System Status
          </h4>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>All PDS v2.4 APIs are currently operational. We recommend using the latest Node.js or Python SDKs for optimal performance.</p>
        </div>
        <h3>Core Principles</h3>
        <ul>
          <li><strong>Agentic First:</strong> Our APIs don't just process text; they orchestrate tasks.</li>
          <li><strong>Privacy default:</strong> All document processing happens in encrypted smart vaults.</li>
          <li><strong>Connected:</strong> Built-in connectors for the world's most popular business tools.</li>
        </ul>
      </>
    )
  },
  quickstart: {
    title: 'Quickstart Guide',
    content: (
      <>
        <p>Follow these three steps to run your first task with a PDS Autonomous Agent.</p>
        <div style={{ marginTop: '2rem' }}>
          <h4>1. Generate an API Key</h4>
          <p>Head to the <Link href="/developers/console" style={{ color: 'var(--neon-cyan)' }}>Developer Console</Link> and create a new Production key.</p>
          
          <h4>2. Install the SDK</h4>
          <pre style={{ background: '#000', padding: '1.2rem', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem', color: '#fff', border: '1px solid var(--border-subtle)', overflowX: 'auto' }}>
            npm install @pds/sdk
          </pre>

          <h4>3. Make your first call</h4>
          <p>Initialize the client and run a simple summary agent on a document.</p>
        </div>
      </>
    )
  },
  auth: {
    title: 'Authentication',
    content: (
      <>
        <p>PDS uses API Keys to authenticate requests. You can view and manage your API keys in the Developer Console.</p>
        <p>Authentication is handled via the <code>Authorization</code> header using a Bearer token.</p>
        <pre style={{ background: '#000', padding: '1.2rem', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem', color: '#fff', border: '1px solid var(--border-subtle)', overflowX: 'auto' }}>
          {`Authorization: Bearer YOUR_PDS_API_KEY`}
        </pre>
        <div style={{ padding: '1rem', background: 'rgba(255, 0, 255, 0.05)', borderRadius: '8px', margin: '2rem 0', border: '1px solid rgba(255, 0, 255, 0.2)' }}>
          <p style={{ margin: 0, color: 'var(--neon-pink)', fontWeight: 600 }}>Security Note:</p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>Never share your API keys in client-side code or public repositories. Use environment variables for all server-side implementations.</p>
        </div>
      </>
    )
  },
  'agent-creation': {
    title: 'Creating Agents',
    content: (
      <>
        <p>Agents in PDS are persistent entities that maintain state, memory, and specialized toolsets.</p>
        <h3>Agent Configurations</h3>
        <p>When creating an agent, you define its Persona, Model, and Tool Access.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border-subtle)' }}>
              <th style={{ padding: '1rem' }}>Property</th>
              <th style={{ padding: '1rem' }}>Required</th>
              <th style={{ padding: '1rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <td style={{ padding: '1rem' }}><code>name</code></td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>A unique identifier for the agent.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <td style={{ padding: '1rem' }}><code>model</code></td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>The LLM underlying the agent (e.g., pds-agent-v2).</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
};

export default function DocumentationPage() {
  const [activePageId, setActivePageId] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const activePage = docContent[activePageId] || docContent['overview'];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '100px' }}>
      {/* ── Sidebar ── */}
      <aside style={{ width: '300px', height: 'calc(100vh - 100px)', borderRight: '1px solid var(--border-subtle)', padding: '2rem', flexShrink: 0, overflowY: 'auto', position: 'sticky', top: '100px' }}>
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <HiOutlineMagnifyingGlass style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search docs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.4rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }} 
          />
        </div>

        <nav>
          {sections.map(section => (
            <div key={section.id} style={{ marginBottom: '2rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--neon-cyan)' }}>{section.icon}</span>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {section.pages.map(page => (
                  <li key={page.id} style={{ marginBottom: '0.4rem' }}>
                    <button 
                      onClick={() => setActivePageId(page.id)}
                      style={{ 
                        width: '100%', 
                        textAlign: 'left', 
                        padding: '0.5rem 0.8rem', 
                        borderRadius: '6px', 
                        border: 'none', 
                        background: activePageId === page.id ? 'rgba(0, 240, 255, 0.1)' : 'transparent', 
                        color: activePageId === page.id ? 'var(--neon-cyan)' : 'var(--text-secondary)', 
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => ! (activePageId === page.id) && (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={e => ! (activePageId === page.id) && (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {page.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* ── Main Content ── */}
      <main style={{ flexGrow: 1, padding: '3rem 5rem', maxWidth: '1000px' }}>
        <AnimatePresence mode="wait">
          <motion.article
            key={activePageId}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--neon-cyan)', marginBottom: '1rem', fontWeight: 600 }}>
              Docs <HiOutlineChevronRight style={{ fontSize: '0.8rem' }} /> Platform
            </div>
            
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.02em' }}>{activePage.title}</h1>
            
            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              {activePage.content || <p>Content for this page is coming soon.</p>}
            </div>

            {/* Footer Navigation */}
            <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
               <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                 <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Previous</span>
                 <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>Introduction</span>
               </button>
               <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                 <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Next</span>
                 <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>Authentication</span>
               </button>
            </div>
          </motion.article>
        </AnimatePresence>
      </main>

      {/* ── On this page (Mini TOC) ── */}
      <aside style={{ width: '240px', padding: '3rem 2rem', flexShrink: 0, position: 'sticky', top: '100px', height: 'calc(100vh - 100px)' }}>
        <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '1.2rem' }}>On this page</h5>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '0.8rem', color: 'var(--neon-cyan)', borderLeft: '2px solid var(--neon-cyan)', paddingLeft: '0.8rem' }}>Overview</li>
          <li style={{ marginBottom: '0.8rem', paddingLeft: '0.8rem' }}>Core Principles</li>
          <li style={{ marginBottom: '0.8rem', paddingLeft: '0.8rem' }}>System Requirements</li>
        </ul>

        <div style={{ marginTop: '3rem', padding: '1.5rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)' }}>
           <h6 style={{ marginBottom: '0.8rem' }}>Need help?</h6>
           <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.2rem' }}>Can't find what you're looking for? Join our community or contact support.</p>
           <Link href="/developers/forum" style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 600, textDecoration: 'none' }}>Go to Forum &rarr;</Link>
        </div>
      </aside>
    </div>
  );
}
