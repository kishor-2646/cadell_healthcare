import React, { useState } from 'react';
import { testimonials } from '../../../data/testimonials';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './AboutContent.module.css';

export const AboutStory: React.FC = () => (
  <section className={`${styles.story} section-pad`}>
    <div className="container">
      <div className={styles.storyGrid}>
        <div className={styles.storyLeft}>
          <SectionHeader
            eyebrow="Our Story"
            title="Personal Care for Your Healthy Living"
          />
        </div>
        <div className={styles.storyRight}>
          <p>Cadell Healthcare Pvt. Ltd. was established with a team of young, dynamic & experienced people in the year 2008. The name Cadell stands for <em>Battle</em> in Welsh. In the battle against deadly lifestyle diseases, we are always committed in Saving Life Together with medical fraternity, social organizations & the society.</p>
          <p>Our core commitment is towards improving health care and creating value for all our stakeholders including doctors, patients, regulators, employees and business partners. We are passionate and enthusiastic about our goal and highly optimistic about our future.</p>
          <p>Cadell Healthcare promises to continue providing high quality medicines manufactured in WHO-GMP facilities with good R&D backup. The prime objective of the company is to become most admired company by doctors, patients, employees and all channel partners.</p>
          <div className={styles.signature}>B. Atatuk</div>
        </div>
      </div>
    </div>
  </section>
);

export const MissionVision: React.FC = () => (
  <section className={`${styles.mv} section-pad`}>
    <div className="container">
      <div className={styles.mvGrid}>
        <div className={styles.mvCard}>
          <div className={styles.mvIcon}>🎯</div>
          <h2 className={styles.mvTitle}>Our Mission</h2>
          <div className={styles.mvDivider} />
          <p className={styles.mvText}>Our mission is to give superior products having high quality standards at affordable cost & to improve the quality standards of the society to enable them to lead healthier, happier and more active lives.</p>
        </div>
        <div className={styles.mvCard}>
          <div className={styles.mvIcon}>🌍</div>
          <h2 className={styles.mvTitle}>Our Vision</h2>
          <div className={styles.mvDivider} />
          <p className={styles.mvText}>With the available resources, we have a vision to expand our presence across the world & become the most successful, respected and patient friendly pharmaceutical company.</p>
        </div>
      </div>
    </div>
  </section>
);

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className={`${styles.testimonials} section-pad`}>
      <div className="container">
        <div className={styles.testGrid}>
          <div className={styles.testLeft}>
            <div className={styles.testIllustration}>
              <div className={styles.testBg} />
              <div className={styles.testEmoji}>👥</div>
            </div>
          </div>
          <div className={styles.testRight}>
            <SectionHeader eyebrow="Testimonials" title="What They Say About Us" />
            <div className={styles.testCard}>
              <div className={styles.stars}>★★★★★</div>
              <h4 className={styles.testName}>{t.name}</h4>
              <span className={styles.testRole}>{t.role}</span>
              <p className={styles.testContent}>{t.content}</p>
            </div>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button key={i} className={`${styles.dot} ${active === i ? styles.dotActive : ''}`} onClick={() => setActive(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
