import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import styles from './StatCounter.module.css';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  isActive: boolean;
  light?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, suffix, label, isActive, light }) => {
  const count = useCounter(value, 2000, isActive);
  return (
    <div className={`${styles.stat} ${light ? styles.light : ''}`}>
      <div className={styles.value}>{count}<span className={styles.suffix}>{suffix}</span></div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
