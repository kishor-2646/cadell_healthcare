import React from 'react';
import { Link } from 'react-router-dom';
import logobg from '../../../assets/logobg.png';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Grain texture overlay */}
      <div className={styles.grain} />
      <div className={styles.overlay} />

      {/* ── TWO-COLUMN BODY ── */}
      <div className={styles.body}>

        {/* LEFT: Text content */}
        <div className={styles.left}>
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
              delivering world-class pharmaceutical products with WHO-GMP quality standards.
            </p>
          </div>

          <div className={styles.actions}>
            <Link to="/appointment" className={styles.btnPrimary}>
              Make Appointment <span className={styles.arrow}>→</span>
            </Link>
            <Link to="/products" className={styles.btnSecondary}>
              View Products
            </Link>
          </div>
        </div>

        {/* RIGHT: Logo + Stats + badges + contact */}
        <div className={styles.right}>

          <div className={styles.rightTop}>

            {/* ── LOGO — warm handcrafted card ── */}
            <div className={styles.logoCard}>
              <div className={styles.logoCardInner}>
                <img src={logobg} alt="Cadell Healthcare" className={styles.logoImg} />
              </div>
              <div className={styles.logoCardFooter}>
                <span className={styles.logoCardTag}>Est. 2008 · Mysore, Karnataka</span>
              </div>
            </div>

            {/* Stats — editorial inline */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>700<sup className={styles.sup}>+</sup></span>
                <span className={styles.statLabel}>Products<br/>Delivered</span>
              </div>
              <div className={styles.statVRule} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40<sup className={styles.sup}>+</sup></span>
                <span className={styles.statLabel}>Expert<br/>Doctors</span>
              </div>
              <div className={styles.statVRule} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15<sup className={styles.sup}>+</sup></span>
                <span className={styles.statLabel}>Years<br/>Experience</span>
              </div>
            </div>

            <div className={styles.statHRule} />

            <div className={styles.badges}>
              <span className={styles.badge}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                WHO-GMP Certified
              </span>
              <span className={styles.badge}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                20+ Branches
              </span>
            </div>
          </div>

          <div className={styles.contactLinks}>
            <a href="mailto:info@cadellhealthcare.com" className={styles.contactLink}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@cadellhealthcare.com
            </a>
            <span className={styles.contactDivider} />
            <a href="tel:+918212970300" className={styles.contactLink}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 – 821 – 2970300
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};