import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
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
            Cadell Healthcare Pvt. Ltd. is a next-generation pharmaceutical
            manufacturer delivering safe, effective, and affordable medicines
            across therapeutic categories — built with care, driven by science.
          </p>
          <div className={styles.actions}>
            <Link to="/products" className={styles.btnPrimary}>View Products →</Link>
            <Link to="/about" className={styles.btnSecondary}>About Cadell</Link>
          </div>
        </div>

        {/* RIGHT: Logo Card */}
        <div className={styles.right}>
          <div className={styles.logoCard}>
            <div className={styles.logoCardInner}>
              <img src={logo} alt="Cadell Healthcare" className={styles.logoImg} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};