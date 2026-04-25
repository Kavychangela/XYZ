"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  HiOutlineHome,
  HiOutlineKey,
  HiOutlineCloud,
  HiOutlineDocumentText,
  HiOutlineCog6Tooth,
  HiOutlineFolder,
  HiOutlineDocument,
  HiOutlineSignal,
  HiOutlineArrowUpTray,
  HiOutlinePlus,
  HiOutlineEllipsisVertical,
  HiOutlineMagnifyingGlass,
  HiOutlineBell,
  HiOutlineUserCircle
} from 'react-icons/hi2';

// --- MOCK DATA ---

const dropboxFolders = [
  { name: 'Financial Services Training', files: 124, size: '1.2 GB', lastSync: '2 mins ago' },
  { name: 'Legal Research Docs', files: 56, size: '450 MB', lastSync: '1 hour ago' },
  { name: 'Customer Support QA', files: 890, size: '3.1 GB', lastSync: '10 mins ago' },
  { name: 'Marketing Assets', files: 34, size: '89 MB', lastSync: '3 days ago' },
];

const recentFiles = [
  { name: 'Q3_Report_Final.pdf', type: 'PDF', size: '2.4 MB', syncStatus: 'Synced' },
  { name: 'User_Manual_v1.2.docx', type: 'DOCX', size: '1.1 MB', syncStatus: 'Synced' },
  { name: 'API_Response_Sample.json', type: 'JSON', size: '12 KB', syncStatus: 'Uploading' },
  { name: 'Dashboard_Mockup.png', type: 'IMAGE', size: '4.5 MB', syncStatus: 'Synced' },
];

const apiKeys = [
  { name: 'Production Main', key: 'pds_live_••••••••••••••••7f3a', created: 'Oct 12, 2025', status: 'Active' },
  { name: 'Development Test', key: 'pds_test_••••••••••••••••k9x2', created: 'Jan 05, 2026', status: 'Active' },
];

const stats = [
  { label: 'API Calls (24h)', value: '12,482', change: '+12%', color: 'var(--neon-cyan)' },
  { label: 'Storage Used', value: '4.8 GB', change: '82%', color: 'var(--neon-purple)' },
  { label: 'Active Agents', value: '7', change: 'Stable', color: 'var(--neon-pink)' },
];

// --- COMPONENTS ---

const SidebarItem = ({ icon, label, id, active, onClick }: any) => (
  <button
    onClick={() => onClick(id)}
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.8rem 1rem',
      borderRadius: '12px',
      border: 'none',
      background: active ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
      color: active ? 'var(--neon-cyan)' : 'var(--text-secondary)',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginBottom: '0.4rem',
      fontSize: '0.95rem',
      fontWeight: active ? '600' : '500'
    }}
    onMouseEnter={e => !active && (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
    onMouseLeave={e => !active && (e.currentTarget.style.background = 'transparent')}
  >
    <span style={{ fontSize: '1.2rem' }}>{icon}</span>
    {label}
    {active && <motion.div layoutId="active-pill" style={{ marginLeft: 'auto', width: '4px', height: '16px', borderRadius: '4px', background: 'var(--neon-cyan)' }} />}
  </button>
);

export default function DeveloperConsole() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-primary)', overflow: 'hidden' }}>
      {/* ── Sidebar ── */}
      <aside style={{ width: '260px', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', padding: '1.5rem', flexShrink: 0 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem', textDecoration: 'none', color: 'inherit' }}>
          <img src="/PDSLogo.png" alt="PDS Logo" style={{ width: '32px', height: '32px' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Developer <span className="text-gradient">Console</span></span>
        </Link>

        <nav style={{ flexGrow: 1 }}>
          <SidebarItem id="dashboard" label="Dashboard" icon={<HiOutlineHome />} active={activeTab === 'dashboard'} onClick={setActiveTab} />
          <SidebarItem id="keys" label="API Keys" icon={<HiOutlineKey />} active={activeTab === 'keys'} onClick={setActiveTab} />
          <SidebarItem id="dropbox" label="Dropbox Sync" icon={<HiOutlineCloud />} active={activeTab === 'dropbox'} onClick={setActiveTab} />
          <SidebarItem id="logs" label="Logs" icon={<HiOutlineDocumentText />} active={activeTab === 'logs'} onClick={setActiveTab} />
        </nav>

        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
          <SidebarItem id="settings" label="Settings" icon={<HiOutlineCog6Tooth />} active={activeTab === 'settings'} onClick={setActiveTab} />
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', marginTop: '1rem', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Credits Remaining</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>$428.50</div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '0.8rem', overflow: 'hidden' }}>
              <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))' }} />
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <header style={{ height: '70px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', padding: '0 2rem', gap: '2rem', flexShrink: 0 }}>
          <div style={{ flexGrow: 1, position: 'relative' }}>
            <HiOutlineMagnifyingGlass style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="text" 
              placeholder="Search resources, files, keys..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', maxWidth: '400px', padding: '0.6rem 1rem 0.6rem 2.4rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none' }} 
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1.3rem', cursor: 'pointer', position: 'relative' }}>
              <HiOutlineBell />
              <span style={{ position: 'absolute', top: '2px', right: '2px', width: '8px', height: '8px', background: 'var(--neon-pink)', borderRadius: '50%', border: '2px solid var(--bg-primary)' }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
              <HiOutlineUserCircle style={{ fontSize: '1.5rem', color: 'var(--neon-cyan)' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>John Doe</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '2rem' }}>
          {activeTab === 'dashboard' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>Good Morning, John</h1>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Here's what's happening with your PDS projects today.</p>
              </div>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((s, i) => (
                  <div key={i} className="glass-panel" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `radial-gradient(circle at top right, ${s.color}15, transparent 70%)` }} />
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>{s.label}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800 }}>{s.value}</div>
                      <div style={{ fontSize: '0.85rem', color: s.change.startsWith('+') ? '#27c93f' : 'var(--text-secondary)', fontWeight: 600 }}>{s.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                {/* Dropbox Quick View */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Dropbox Integration</h3>
                    <button onClick={() => setActiveTab('dropbox')} style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Manage Storage</button>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <th style={{ padding: '1rem' }}>FOLDER</th>
                          <th style={{ padding: '1rem' }}>FILES</th>
                          <th style={{ padding: '1rem' }}>LAST SYNC</th>
                          <th style={{ padding: '1rem' }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {dropboxFolders.slice(0, 3).map((f, i) => (
                          <tr key={i} style={{ borderBottom: i === 2 ? 'none' : '1px solid var(--border-subtle)', fontSize: '0.9rem' }}>
                            <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                              <HiOutlineFolder style={{ color: 'var(--neon-purple)', fontSize: '1.2rem' }} />
                              {f.name}
                            </td>
                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{f.files} items</td>
                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{f.lastSync}</td>
                            <td style={{ padding: '1rem', textAlign: 'right' }}><HiOutlineEllipsisVertical /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* API Keys Quick View */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>API Usage</h3>
                    <HiOutlineSignal style={{ color: 'var(--neon-cyan)' }} />
                  </div>
                  <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '6px', paddingBottom: '1rem' }}>
                    {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        style={{ flexGrow: 1, background: 'linear-gradient(to top, var(--neon-cyan), var(--neon-purple))', borderRadius: '4px 4px 0 0', opacity: 0.8 }} 
                      />
                    ))}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                    Avg. response time: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>248ms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'dropbox' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h1 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>Dropbox Integration</h1>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Managing smart document sync between Dropbox and PDS AI.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <button style={{ padding: '0.7rem 1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '10px', color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                     <HiOutlinePlus /> Connect Folder
                   </button>
                   <button style={{ padding: '0.7rem 1.2rem', background: 'var(--neon-cyan)', border: 'none', borderRadius: '10px', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                     <HiOutlineArrowUpTray /> Upload Files
                   </button>
                </div>
              </div>

              {/* Connection Banner */}
              <div style={{ background: 'linear-gradient(90deg, rgba(0, 97, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid rgba(0, 97, 255, 0.2)', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ width: '50px', height: '50px', background: '#0061FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: '#fff' }}>
                  <HiOutlineCloud />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Connected to Dropbox (Personal)</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Account: <span style={{ color: 'var(--text-primary)' }}>john.doe@gmail.com</span> • Storage: 1.4 TB / 2.0 TB</div>
                </div>
                <button style={{ marginLeft: 'auto', padding: '0.5rem 1rem', background: 'transparent', border: '1px solid rgba(255,0,0,0.2)', color: '#ff4d4d', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Disconnect</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {dropboxFolders.map((f, i) => (
                  <div key={i} className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'rgba(138, 43, 226, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-purple)', fontSize: '1.4rem' }}>
                        <HiOutlineFolder />
                      </div>
                      <HiOutlineEllipsisVertical style={{ color: 'var(--text-secondary)', cursor: 'pointer' }} />
                    </div>
                    <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.1rem' }}>{f.name}</h4>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{f.files} files • {f.size}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.03)', padding: '0.4rem 0.6rem', borderRadius: '6px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }} />
                      Synced {f.lastSync}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Recent File Activity</h3>
                <div className="glass-panel" style={{ padding: '0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <th style={{ padding: '1.2rem 1.5rem' }}>FILE NAME</th>
                        <th style={{ padding: '1.2rem 1.5rem' }}>TYPE</th>
                        <th style={{ padding: '1.2rem 1.5rem' }}>SIZE</th>
                        <th style={{ padding: '1.2rem 1.5rem' }}>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentFiles.map((file, i) => (
                        <tr key={i} style={{ borderBottom: i === recentFiles.length - 1 ? 'none' : '1px solid var(--border-subtle)', fontSize: '0.9rem' }}>
                          <td style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <HiOutlineDocument style={{ color: 'var(--neon-cyan)', fontSize: '1.2rem' }} />
                            {file.name}
                          </td>
                          <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-secondary)' }}>{file.type}</td>
                          <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-secondary)' }}>{file.size}</td>
                          <td style={{ padding: '1.2rem 1.5rem' }}>
                            <span style={{ 
                              padding: '0.2rem 0.6rem', 
                              borderRadius: '4px', 
                              fontSize: '0.75rem', 
                              fontWeight: 700, 
                              background: file.syncStatus === 'Synced' ? 'rgba(39, 201, 63, 0.1)' : 'rgba(255, 189, 46, 0.1)',
                              color: file.syncStatus === 'Synced' ? '#27c93f' : '#ffbd2e'
                            }}>
                              {file.syncStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'keys' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h1 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>API Management</h1>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem' }}>Create and manage access keys for PDS services.</p>
                </div>
                <button style={{ padding: '0.7rem 1.5rem', background: 'var(--neon-cyan)', border: 'none', borderRadius: '10px', color: '#000', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <HiOutlinePlus /> Create API Key
                </button>
              </div>

              <div className="glass-panel" style={{ padding: '0', marginBottom: '2.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <th style={{ padding: '1.2rem 1.5rem' }}>KEY NAME</th>
                      <th style={{ padding: '1.2rem 1.5rem' }}>KEY VALUE</th>
                      <th style={{ padding: '1.2rem 1.5rem' }}>CREATED</th>
                      <th style={{ padding: '1.2rem 1.5rem' }}>STATUS</th>
                      <th style={{ padding: '1.2rem 1.5rem' }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiKeys.map((k, i) => (
                      <tr key={i} style={{ borderBottom: i === apiKeys.length - 1 ? 'none' : '1px solid var(--border-subtle)', fontSize: '0.95rem' }}>
                        <td style={{ padding: '1.2rem 1.5rem', fontWeight: 600 }}>{k.name}</td>
                        <td style={{ padding: '1.2rem 1.5rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{k.key}</td>
                        <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-secondary)' }}>{k.created}</td>
                        <td style={{ padding: '1.2rem 1.5rem' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(39, 201, 63, 0.1)', color: '#27c93f', border: '1px solid rgba(39, 201, 63, 0.2)' }}>{k.status}</span>
                        </td>
                        <td style={{ padding: '1.2rem 1.5rem' }}><HiOutlineEllipsisVertical style={{ cursor: 'pointer' }} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="glass-panel bg-gradient" style={{ padding: '2rem', textAlign: 'center' }}>
                <HiOutlineKey style={{ fontSize: '3rem', color: 'var(--neon-cyan)', marginBottom: '1rem' }} />
                <h3>Need help integrating?</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>Check out our developer documentation for SDK installation guides and best practices for securing your keys.</p>
                <Link href="/developers" style={{ color: 'var(--neon-cyan)', fontWeight: 600, textDecoration: 'none' }}>View Documentation &rarr;</Link>
              </div>
            </motion.div>
          )}

          {/* Placeholder for other tabs */}
          {['logs', 'settings'].includes(activeTab) && (
            <div style={{ height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
              <HiOutlineCog6Tooth style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'spin 4s linear infinite' }} />
              <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module</h3>
              <p>This section is under active development.</p>
              <style jsx>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
