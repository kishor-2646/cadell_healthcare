import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow, title, subtitle, align = 'left', light = false
}) => (
  <div className={`${styles.header} ${styles[align]} ${light ? styles.light : ''}`}>
    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
);
