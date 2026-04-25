"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  // Comment
  if (!mounted) {
    return (
      <button className={styles.toggle} aria-label="Toggle theme">
        <div className={styles.iconWrapper} />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  const isLight = resolvedTheme === 'light';

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggle}
      aria-label="Toggle theme"
    >
      <div className={styles.iconWrapper}>
        {isLight ? (
          <HiOutlineMoon className={styles.icon} />
        ) : (
          <HiOutlineSun className={styles.icon} />
        )}
      </div>
    </button>
  );
}

