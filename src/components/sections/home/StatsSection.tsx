import React from 'react';
import { stats } from '../../../data/stats';
import { StatCounter } from '../../ui/StatCounter';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './StatsSection.module.css';

export const StatsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
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
  );
};
