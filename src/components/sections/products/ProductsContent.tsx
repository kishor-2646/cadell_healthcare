import React, { useState } from 'react';
import { products, categories } from '../../../data/products';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './ProductsContent.module.css';

const categoryColors: Record<string, string> = {}; // unused — kept for safety

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
            return (
              <div key={p.id} className={styles.card}>

                {/* ── IMAGE PLACEHOLDER ── */}
                <div className={styles.cardImg}>
                  <div className={styles.placeholder}>
                    <svg className={styles.placeholderIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className={styles.placeholderText}>{p.name}</span>
                    <span className={styles.placeholderSub}>Image coming soon</span>
                  </div>
                </div>

                {/* ── CARD BODY ── */}
                <div className={styles.cardBody}>
                  <span className={styles.categoryTag}>{p.category}</span>
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