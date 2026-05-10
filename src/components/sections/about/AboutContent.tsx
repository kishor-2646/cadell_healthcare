import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../../../data/testimonials';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './AboutContent.module.css';

/* ── image imports — Vite resolves these at build time ── */
import slide1 from '../../../assets/mv/slide1.png';
import slide2 from '../../../assets/mv/slide2.png';
import slide3 from '../../../assets/mv/slide3.png';
import slide4 from '../../../assets/mv/slide4.png';
import slide5 from '../../../assets/mv/slide5.png';
import slide6 from '../../../assets/mv/slide6.png';

const carouselImages = [slide1, slide2, slide3, slide4, slide5, slide6];

/* ── Single typewriter across all 3 paragraphs, signature after ── */
function useTypewriter(fullText: string, speed = 14) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone]           = useState(false);
  const [started, setStarted]     = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.unobserve(el); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed('');
    setDone(false);
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) { clearInterval(interval); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [started, fullText, speed]);

  return { displayed, done, ref };
}

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* The 3 paragraphs joined by a sentinel so we can split them back for rendering */
const SEP = '\n\n';
const para1 = 'Cadell Healthcare Pvt. Ltd. was established with a team of young, dynamic & experienced people in the year 2008. The name Cadell stands for Battle in Welsh. In the battle against deadly lifestyle diseases, we are always committed in Saving Life Together with medical fraternity, social organizations & the society.';
const para2 = 'Our core commitment is towards improving health care and creating value for all our stakeholders including doctors, patients, regulators, employees and business partners. We are passionate and enthusiastic about our goal and highly optimistic about our future.';
const para3 = 'Cadell Healthcare promises to continue providing high quality medicines manufactured in WHO-GMP facilities with good R&D backup. The prime objective of the company is to become most admired company by doctors, patients, employees and all channel partners.';
const FULL_TEXT = [para1, para2, para3].join(SEP);

export const AboutStory: React.FC = () => {
  const left = useReveal(0.2);
  const { displayed, done, ref: typeRef } = useTypewriter(FULL_TEXT, 4);

  /* Split displayed text back into up-to-3 paragraphs */
  const parts = displayed.split(SEP);

  return (
    <section className={`${styles.story} section-pad`}>
      <div className="container">
        <div className={styles.storyGrid}>

          {/* LEFT — elegant fade + slide up */}
          <div
            ref={left.ref}
            className={`${styles.storyLeft} ${left.visible ? styles.revealIn : styles.revealOut}`}
          >
            <SectionHeader
              eyebrow="Our Story"
              title="Personal Care for Your Healthy Living"
            />
          </div>

          {/* RIGHT — single typewriter across all paragraphs */}
          <div className={styles.storyRight} ref={typeRef}>
            {parts.map((text, i) => (
              <p key={i} className={styles.typePara}>
                {text}
                {/* show cursor only on the last actively-typing paragraph */}
                {!done && i === parts.length - 1 && <span className={styles.cursor} />}
              </p>
            ))}

            {/* Signature fades in only after all typing is done */}
            <div className={`${styles.signature} ${done ? styles.sigIn : styles.sigOut}`}>
              B. Atatuk
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Duplicate slides 4× so the CSS marquee never shows a gap
const marqueeSlides = [...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages];

export const MissionVision: React.FC = () => (
  <section className={styles.mv}>
    {/* ── INFINITE MARQUEE BACKGROUND ── */}
    <div className={styles.carouselBg}>
      <div className={styles.marqueeTrack}>
        {marqueeSlides.map((src, i) => (
          <div key={i} className={styles.marqueeSlide}>
            <img src={src} alt="" className={styles.marqueeImg} />
          </div>
        ))}
      </div>
      {/* dark overlay */}
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