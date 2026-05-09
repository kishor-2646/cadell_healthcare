import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiAward, FiGlobe } from 'react-icons/fi';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    {/* Background */}
    <div className={styles.bg}>
      <div className={styles.bgGrad} />
      <div className={styles.bgGrid} />
    </div>

    <div className="container">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Total Health Care Solution</span>
          <h1 className={styles.title}>
            Your Most <em>Trusted</em><br />
            <span className={styles.brand}>CADELL</span><br />
            Healthcare Partner
          </h1>
          <p className={styles.desc}>
            Focused on Cardiology, Diabetology, Endocrinology &amp; Gastroenterology — delivering world-class pharmaceutical products across therapy segments with WHO-GMP quality standards.
          </p>
          <div className={styles.actions}>
            <Link to="/contact" className={styles.btnPrimary}>
              Make Appointment <FiArrowRight />
            </Link>
            <Link to="/products" className={styles.btnSecondary}>
              View Products
            </Link>
          </div>

          {/* Feature Pills */}
          <div className={styles.pills}>
            <span className={styles.pill}><FiShield size={14} /> WHO-GMP Certified</span>
            <span className={styles.pill}><FiAward size={14} /> Est. 2008</span>
            <span className={styles.pill}><FiGlobe size={14} /> 20+ Branches</span>
          </div>
        </div>

        {/* Floating Stats */}
        <div className={styles.floatCards}>
          <div className={styles.card}>
            <div className={styles.cardNum}>700<span>+</span></div>
            <div className={styles.cardLabel}>Products Delivered</div>
          </div>
          <div className={`${styles.card} ${styles.cardAlt}`}>
            <div className={styles.cardNum}>40<span>+</span></div>
            <div className={styles.cardLabel}>Expert Doctors</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNum}>15<span>+</span></div>
            <div className={styles.cardLabel}>Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
