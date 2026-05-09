import React from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow: string;
  title: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title }) => (
  <section className={styles.hero}>
    <div className={styles.overlay} />
    <div className="container">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  </section>
);
