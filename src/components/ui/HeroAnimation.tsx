"use client";

import { motion } from 'framer-motion';
import styles from './HeroAnimation.module.css';

export default function HeroAnimation() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.blob1}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={styles.blob2}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={styles.gridPattern}></div>
    </div>
  );
}
