import React from 'react';
import { stats } from '../../../data/stats';
import { StatCounter } from '../../ui/StatCounter';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './StatsSection.module.css';

import ontelAm      from '../../../assets/products/ontel-am.png';
import vilapil50    from '../../../assets/products/vilapil-50.png';
import vilapilM     from '../../../assets/products/vilapil-m.png';
import pantodellDsr from '../../../assets/products/pantodell-dsr.png';
import cadellAz     from '../../../assets/products/cadell-az.png';
import fitpro40     from '../../../assets/products/fitpro-40.png';
import slide1       from '../../../assets/mv/slide1.png';
import slide2       from '../../../assets/mv/slide2.png';
import slide3       from '../../../assets/mv/slide3.png';
import slide4       from '../../../assets/mv/slide4.png';
import slide5       from '../../../assets/mv/slide5.png';
import slide6       from '../../../assets/mv/slide6.png';

const SOURCE_IMGS = [
  ontelAm, vilapil50, vilapilM, pantodellDsr, cadellAz, fitpro40,
  slide1, slide2, slide3, slide4, slide5, slide6,
];

const ROWS = 5;
const TILES_PER_ROW = 20;
const collageRows = Array.from({ length: ROWS }, (_, row) =>
  Array.from({ length: TILES_PER_ROW }, (_, col) =>
    SOURCE_IMGS[(row * TILES_PER_ROW + col) % SOURCE_IMGS.length]
  )
);

export const StatsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <>
      {/* ── TITLE — outside the dark strip ── */}
      <div className={styles.titleBlock}>
        <p className={styles.eyebrow}>Our Impact</p>
        <h2 className={styles.title}>Numbers That Speak For Us</h2>
        <p className={styles.subtitle}>
          Trusted by doctors and patients across India, our growth reflects our commitment
          to quality healthcare and pharmaceutical excellence.
        </p>
      </div>

      {/* ── DARK STRIP ── */}
      <section className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
        <div className={styles.collage} aria-hidden="true">
          {collageRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`${styles.collageRow} ${rowIdx % 2 === 0 ? styles.rowLeft : styles.rowRight}`}
            >
              {[...row, ...row].map((src, i) => (
                <img key={i} src={src} alt="" className={styles.collageImg} />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.collageMask} />
        <div className={styles.overlay} />

        <div className="container">
          <div className={styles.grid}>
            {stats.map((s, i) => (
              <div key={i} className={`${styles.item} ${isVisible ? styles.visible : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} isActive={isVisible} light />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};