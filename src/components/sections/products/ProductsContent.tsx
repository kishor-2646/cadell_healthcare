import React, { useState } from 'react';
import { products, categories } from '../../../data/products';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './ProductsContent.module.css';

export const ProductGrid: React.FC = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  const categoryColors: Record<string, string> = {
    'Cardiology': '#e53e3e',
    'Diabetology': '#3182ce',
    'Gastroenterology': '#38a169',
    'Antibiotics': '#d69e2e',
  };

  return (
    <section className={`section-pad`}>
      <div className="container">
        <div className={styles.headerRow}>
          <SectionHeader eyebrow="All Products" title="Product's Department" />
          <div className={styles.filters}>
            {categories.map(c => (
              <button key={c} className={`${styles.filter} ${active === c ? styles.filterActive : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.cardImg}>
                <div className={styles.placeholder}>
                  <span>{p.name}</span>
                </div>
                <span className={styles.badge} style={{ background: categoryColors[p.category] || '#718096' }}>{p.category}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.generic}>{p.genericName}</p>
                <p className={styles.desc}>{p.description}</p>
                <a href="#" className={styles.learn}>Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
