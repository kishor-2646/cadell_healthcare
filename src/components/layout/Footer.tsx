import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import styles from './Footer.module.css';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.cta}>
      <div className="container">
        <div className={styles.ctaInner}>
          <div>
            <h3 className={styles.ctaTitle}>Ready to partner with Cadell Healthcare?</h3>
            <p className={styles.ctaSub}>Connect with us for world-class pharmaceutical solutions.</p>
          </div>
          <Link to="/contact" className={styles.ctaBtn}>Get In Touch</Link>
        </div>
      </div>
    </div>

    <div className={styles.main}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoMark}><span>C</span></div>
              <div>
                <div className={styles.logoName}>cadell</div>
                <div className={styles.logoSub}>Healthcare Pvt. Ltd.</div>
              </div>
            </div>
            <p className={styles.tagline}>Battling lifestyle diseases with high-quality, affordable medicines manufactured to WHO-GMP standards.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </div>

          {/* Departments */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Department</h4>
            {['Surgery','Women\'s Health','Radiology','Cardiology','Medicine'].map(d => (
              <Link key={d} to="/products" className={styles.colLink}>{d}</Link>
            ))}
          </div>

          {/* Support */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Support</h4>
            {['Terms & Conditions','Privacy Policy','Company Support','FAQ','Company Licence'].map(s => (
              <a key={s} href="#" className={styles.colLink}>{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <div className={styles.contactItem}>
              <FiMail size={14} />
              <div>
                <span className={styles.contactLabel}>Support Available 24/7</span>
                <a href="mailto:info@cadellhealthcare.com">info@cadellhealthcare.com</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FiPhone size={14} />
              <div>
                <span className={styles.contactLabel}>Mon to Fri : 08:30 – 18:00</span>
                <a href="tel:+918212970300">Tel : +91 – 821 – 2970300</a>
                <a href="tel:+919060644409">Mob : 90606 44409</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FiMapPin size={14} />
              <div>
                <span className={styles.contactLabel}>Registered Office</span>
                <span>No. C-69, Yadavagiri Industrial Estate, Mysore – 570 020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.bottom}>
      <div className="container">
        <p>© {new Date().getFullYear()} Copyright Reserved to Cadell Health Care Pvt. Ltd.</p>
      </div>
    </div>
  </footer>
);
