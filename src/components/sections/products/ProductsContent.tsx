import React, { useState } from 'react';
import { products, categories } from '../../../data/products';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './ProductsContent.module.css';

/* ── product image imports — Vite resolves at build time ── */
import ontelAm      from '../../../assets/products/ontel-am.png';
import vilapil50    from '../../../assets/products/vilapil-50.png';
import vilapilM     from '../../../assets/products/vilapil-m.png';
import pantodellDsr from '../../../assets/products/pantodell-dsr.png';
import cadellAz     from '../../../assets/products/cadell-az.png';
import fitpro40     from '../../../assets/products/fitpro-40.png';

const productImages: Record<string, string> = {
  'ONTEL-AM':      ontelAm,
  'VILAPIL-50':    vilapil50,
  'VILAPIL-M':     vilapilM,
  'PANTODELL-DSR': pantodellDsr,
  'CADELL-AZ':     cadellAz,
  'FITPRO-40':     fitpro40,
};

const categoryColors: Record<string, string> = {
  'Cardiology':       '#e53e3e',
  'Diabetology':      '#3182ce',
  'Gastroenterology': '#38a169',
  'Antibiotics':      '#d69e2e',
};

export const ProductGrid: React.FC = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <section className="section-pad">
      <div className="container">
        <div className={styles.headerRow}>
          <SectionHeader eyebrow="All Products" title="Product's Department" />
          <div className={styles.filters}>
            {categories.map(c => (
              <button
                key={c}
                className={`${styles.filter} ${active === c ? styles.filterActive : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => {
            const imgSrc = productImages[p.name];
            return (
              <div key={p.id} className={styles.card}>

                {/* ── IMAGE AREA ── */}
                <div className={styles.cardImg}>
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={p.name}
                      className={styles.productImg}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const next = e.currentTarget.nextElementSibling as HTMLElement;
                        if (next) next.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* fallback — shown when no image or load fails */}
                  <div
                    className={styles.placeholder}
                    style={imgSrc ? { display: 'none' } : {}}
                  >
                    <span className={styles.placeholderText}>{p.name}</span>
                  </div>
                  <span
                    className={styles.badge}
                    style={{ background: categoryColors[p.category] || '#718096' }}
                  >
                    {p.category}
                  </span>
                </div>

                {/* ── CARD BODY ── */}
                <div className={styles.cardBody}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.generic}>{p.genericName}</p>
                  <a href="#" className={styles.learnMore}>Learn More →</a>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};