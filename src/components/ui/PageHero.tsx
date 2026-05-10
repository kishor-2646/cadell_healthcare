import React from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  backgroundImage?: string; // optional custom image path
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, backgroundImage }) => (
  <section
    className={styles.hero}
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
  >
    {/* dark navy opaque layer over the image */}
    <div className={styles.imageOverlay} />
    {/* vignette around borders */}
    <div className={styles.vignette} />
    {/* grid pattern (only shown when no image) */}
    <div className={`${styles.grid} ${backgroundImage ? styles.gridHidden : ''}`} />
    <div className={styles.overlay} />
    <div className="container">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  </section>
);