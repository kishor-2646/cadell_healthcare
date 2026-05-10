import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../../../data/testimonials';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './AboutContent.module.css';

/* ── image paths — drop your own into src/assets/mv/ ── */
const carouselImages = [
  '/src/assets/mv/slide1.png',
  '/src/assets/mv/slide2.png',
  '/src/assets/mv/slide3.png',
  '/src/assets/mv/slide4.png',
  '/src/assets/mv/slide5.png',
  '/src/assets/mv/slide6.png',
];

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

const SLIDE_W = 300;   // base slide width px
const SLIDE_GAP = 16;  // gap px
const STEP = SLIDE_W + SLIDE_GAP;

export const MissionVision: React.FC = () => {
  const bgRef   = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number>(0);
  const posRef  = useRef<number>(0);
  const totalRef = useRef<number>(0);

  // duplicate images for seamless loop
  const slides = [...carouselImages, ...carouselImages, ...carouselImages];

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    // total width of ONE full set
    totalRef.current = carouselImages.length * STEP;

    const tick = () => {
      posRef.current += 0.5; // speed px/frame — adjust to taste
      // reset when we've scrolled one full set
      if (posRef.current >= totalRef.current) posRef.current = 0;

      const containerCx = bg.offsetWidth / 2;

      Array.from(bg.children).forEach((child, idx) => {
        const el = child as HTMLElement;
        // center-x of this slide in the scrolling track
        const slideCx = idx * STEP + SLIDE_W / 2 - posRef.current;
        const dist    = Math.abs(containerCx - slideCx);
        const maxDist = containerCx + SLIDE_W;
        // scale: 1.0 at center → 0.72 at far edges
        const scale   = Math.max(0.72, 1.0 - (dist / maxDist) * 0.60);
        // opacity: 1.0 at center → 0.35 at far edges
        const opacity = Math.max(0.35, 1.0 - (dist / maxDist) * 1.0);

        el.style.transform = `translateX(${-posRef.current}px) scaleY(${scale})`;
        el.style.opacity   = String(opacity);
        // each slide has its own translateX baseline
        el.style.transform = `translateX(${idx * STEP - posRef.current}px) scale(${scale})`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className={styles.mv}>
      {/* ── CAROUSEL BACKGROUND ── */}
      <div className={styles.carouselBg}>
        {/* slides are absolutely positioned children of carouselBg */}
        <div className={styles.carouselTrack} ref={bgRef}>
          {slides.map((src, i) => (
            <div key={i} className={styles.carouselSlide} style={{ left: 0, top: 0 }}>
              <img src={src} alt="" className={styles.carouselImg} />
            </div>
          ))}
        </div>
        {/* dark navy overlay */}
        <div className={styles.carouselOverlay} />
        {/* vignette */}
        <div className={styles.carouselVignette} />
      </div>

      {/* ── CARDS ── */}
      <div className={`${styles.mvInner} section-pad`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <h2 className={styles.mvTitle}>Our Mission</h2>
              <div className={styles.mvDivider} />
              <p className={styles.mvText}>Our mission is to give superior products having high quality standards at affordable cost & to improve the quality standards of the society to enable them to lead healthier, happier and more active lives.</p>
            </div>
            <div className={styles.mvCard}>
              <h2 className={styles.mvTitle}>Our Vision</h2>
              <div className={styles.mvDivider} />
              <p className={styles.mvText}>With the available resources, we have a vision to expand our presence across the world & become the most successful, respected and patient friendly pharmaceutical company.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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