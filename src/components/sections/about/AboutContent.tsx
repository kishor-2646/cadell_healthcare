import React from 'react';
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

/* ── Scroll-reveal hook ── */
import { useRef, useState, useEffect } from 'react';

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

export const AboutStory: React.FC = () => {
  const left = useReveal(0.2);
  const right = useReveal(0.15);
  const photo = useReveal(0.1);

  return (
    <section className={`${styles.story} section-pad`}>
      <div className="container">
        <div className={styles.storyGrid}>

          {/* LEFT */}
          <div
            ref={left.ref}
            className={`${styles.storyLeft} ${left.visible ? styles.revealIn : styles.revealOut}`}
          >
            <SectionHeader
              eyebrow="Our Story"
              title="Personal Care for Your Healthy Living"
            />
            <blockquote className={styles.storyPullQuote}>
              "In the battle against deadly lifestyle diseases, we stand committed to
              {' '}<em>Saving Life Together.</em>"
            </blockquote>
            <div className={styles.founderSig}>— B. Atatuk, Founder</div>
          </div>

          {/* RIGHT — paragraphs, no typewriter */}
          <div
            ref={right.ref}
            className={`${styles.storyRight} ${right.visible ? styles.revealIn : styles.revealOut}`}
          >
            <p>
              Cadell Healthcare Pvt. Ltd. was established with a team of young, dynamic &amp; experienced
              people in the year 2008. The name <em>Cadell</em> stands for Battle in Welsh. In the battle
              against deadly lifestyle diseases, we are always committed in Saving Life Together with
              medical fraternity, social organizations &amp; the society.
            </p>
            <p>
              Our core commitment is towards improving health care and creating value for all our
              stakeholders including doctors, patients, regulators, employees and business partners.
              We are passionate and enthusiastic about our goal and highly optimistic about our future.
            </p>
            <p>
              Cadell Healthcare promises to continue providing high quality medicines manufactured in
              WHO-GMP facilities with good R&amp;D backup. The prime objective of the company is to
              become the most admired company by doctors, patients, employees and all channel partners.
            </p>
          </div>

        </div>

        {/* ── FULL-WIDTH PHOTO + QUOTE ── */}
        <div
          ref={photo.ref}
          className={`${styles.storyPhotoBlock} ${photo.visible ? styles.revealIn : styles.revealOut}`}
        >
          <div className={styles.storyPhotoWrap}>
            <img
              src="/src/assets/about-story.png"
              alt="Cadell Healthcare facility"
              className={styles.storyPhoto}
            />
            {/* dark overlay + vignette */}
            <div className={styles.storyPhotoOverlay} />
            <div className={styles.storyPhotoVignette} />
            {/* quote floated over the image */}
            <div className={styles.storyPhotoQuote}>
              <svg className={styles.quoteIcon} width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className={styles.quoteText}>
                In the battle against deadly lifestyle diseases, we stand committed to Saving Life Together.
              </p>
              <span className={styles.quoteAuthor}>— B. Atatuk, Founder &amp; Managing Director</span>
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
            <p className={styles.mvText}>Our mission is to give superior products having high quality standards at affordable cost &amp; to improve the quality standards of the society to enable them to lead healthier, happier and more active lives.</p>
          </div>
          <div className={styles.mvCard}>
            <h2 className={styles.mvTitle}>Our Vision</h2>
            <div className={styles.mvDivider} />
            <p className={styles.mvText}>With the available resources, we have a vision to expand our presence across the world &amp; become the most successful, respected and patient friendly pharmaceutical company.</p>
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
              <div className={styles.testQuoteMark}>"</div>
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