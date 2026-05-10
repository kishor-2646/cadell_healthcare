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

            {/* Stats — individual dark cards */}
            <div className={styles.statsCard}>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Products{'\n'}Delivered</span>
                  <span className={styles.statNumber}>700<sup className={styles.sup}>+</sup></span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Expert{'\n'}Doctors</span>
                  <span className={styles.statNumber}>40<sup className={styles.sup}>+</sup></span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Years{'\n'}Experience</span>
                  <span className={styles.statNumber}>15<sup className={styles.sup}>+</sup></span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};