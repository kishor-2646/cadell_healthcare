import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logobg.png';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Overlay */}
      <div className={styles.overlay} />

      {/* ── TWO-COLUMN BODY ── */}
      <div className={styles.body}>

        {/* LEFT: Text content */}
        <div className={styles.left}>

          {/* Top group — tagline + headline + description */}
          <div className={styles.leftTop}>
            <p className={styles.tagline}>
              <span className={styles.taglineLine} />
              TOTAL HEALTH CARE SOLUTION
            </p>

            <h1 className={styles.headline}>
              Your Most{' '}
              <em className={styles.italic}>Trusted</em>
              <br />
              <span className={styles.brandName}>CADELL</span>
              <br />
              Healthcare Partner
            </h1>

            <p className={styles.description}>
              Focused on Cardiology, Diabetology, Endocrinology &amp; Gastroenterology —
              delivering world-class pharmaceutical products across therapy segments
              with WHO-GMP quality standards.
            </p>
          </div>

          {/* Bottom item — pinned to same Y as contactLinks on right */}
          <div className={styles.actions}>
            <Link to="/appointment" className={styles.btnPrimary}>
              Make Appointment <span className={styles.arrow}>→</span>
            </Link>
            <Link to="/products" className={styles.btnSecondary}>
              View Products
            </Link>
          </div>
        </div>

        {/* RIGHT: Logo + Stats card + badges + contact */}
        <div className={styles.right}>

          {/* Top group — logo, stats, badges */}
          <div className={styles.rightTop}>
            <div className={styles.heroLogoWrap}>
              <img src={logo} alt="Cadell Healthcare" className={styles.heroLogo} />
            </div>

            <div className={styles.statsPanel}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>700<sup className={styles.sup}>+</sup></span>
                <span className={styles.statLabel}>Products Delivered</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40<sup className={styles.sup}>+</sup></span>
                <span className={styles.statLabel}>Expert Doctors</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15<sup className={styles.sup}>+</sup></span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>

            <div className={styles.badges}>
              <span className={styles.badge}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                WHO-GMP Certified
              </span>
              <span className={styles.badge}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Est. 2008
              </span>
              <span className={styles.badge}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                20+ Branches
              </span>
            </div>
          </div>

          {/* Bottom item — pinned to same Y as Make Appointment button on left */}
          <div className={styles.contactLinks}>
            <a href="mailto:info@cadellhealthcare.com" className={styles.contactLink}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
            <span className={styles.contactDivider} />
            <a href="tel:+918212970300" className={styles.contactLink}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 – 821 – 2970300
            </a>
            <span className={styles.contactDivider} />
            <span className={styles.contactLink}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Mysore, Karnataka
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};