import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { products } from '../../../data/products';
import { SectionHeader } from '../../ui/SectionHeader';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './ProductsPreview.module.css';

const categoryColors: Record<string, string> = {
  'Cardiology': '#e53e3e',
  'Diabetology': '#3182ce',
  'Gastroenterology': '#38a169',
  'Antibiotics': '#d69e2e',
};

export const ProductsPreview: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={`${styles.section} section-pad`} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeader
            eyebrow="Our Products"
            title="Products & Healthy Living"
            subtitle="We provide best leading medicine services focused on improving health standards."
          />
          <Link to="/products" className={styles.viewAll}>
            View All Products <FiArrowRight />
          </Link>
        </div>

        <div className={styles.grid}>
          {products.slice(0, 6).map((p, i) => (
            <div key={p.id} className={`${styles.card} ${isVisible ? styles.visible : ''}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.cardImg}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className={styles.productImg}
                    onError={(e) => {
                      // fallback: hide img and show placeholder sibling
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                      if (sibling) sibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className={styles.placeholder} style={p.image ? { display: 'none' } : {}}>
                  <span className={styles.placeholderText}>{p.name}</span>
                </div>
                <span className={styles.badge} style={{ background: categoryColors[p.category] || '#718096' }}>
                  {p.category}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.generic}>{p.genericName}</p>
                <Link to="/products" className={styles.learnMore}>Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};