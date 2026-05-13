import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../../assets/hero.jpg';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.grain} />
      <div className={styles.overlay} />

      <div className={styles.body}>

        {/* LEFT: Text */}
        <div className={styles.left}>
          <h1 className={styles.headline}>
            <span className={styles.white}>Trusted</span><br />
            <span className={styles.white}>Healthcare for</span><br />
            <span className={styles.teal}>You &amp; Family</span>
          </h1>
          <div className={styles.divider} />
          <p className={styles.tagline}>Your Health, Our Highest Priority</p>
          <p className={styles.description}>
            [Company Name] is a next-generation pharmaceutical
            manufacturer delivering safe, effective, and affordable medicines
            across therapeutic categories — built with care, driven by science.
          </p>
          <div className={styles.actions}>
            <Link to="/products" className={styles.btnPrimary}>View Products →</Link>
            <Link to="/about" className={styles.btnSecondary}>About Us</Link>
          </div>
        </div>

        {/* RIGHT: Logo Placeholder Card */}
        <div className={styles.right}>
          <div className={styles.logoCard}>
            <div className={styles.logoCardInner}>
              <div className={styles.logoPlaceholder}>
                <div className={styles.logoPlaceholderIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <span className={styles.logoPlaceholderText}>YOUR LOGO HERE</span>
                <span className={styles.logoPlaceholderSub}>Replace with your brand logo</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};