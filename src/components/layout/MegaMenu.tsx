"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './MegaMenu.module.css';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sections: {
    title: string;
    links: { label: string; href: string; description?: string }[];
  }[];
}

export default function MegaMenu({ isOpen, onClose, title, sections }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={styles.dropdown}
          onMouseLeave={onClose}
        >
          <div className={styles.grid}>
            {sections.map((section, idx) => (
              <div key={idx} className={styles.section}>
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                <div className={styles.links}>
                  {section.links.map((link, lIdx) => (
                    <Link key={lIdx} href={link.href} className={styles.link} onClick={onClose}>
                      <span className={styles.linkLabel}>{link.label}</span>
                      {link.description && (
                        <span className={styles.linkDesc}>{link.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
