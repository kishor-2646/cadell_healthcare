import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children, variant = 'primary', size = 'md',
  onClick, type = 'button', className = '', disabled
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
  >
    <span>{children}</span>
  </button>
);
