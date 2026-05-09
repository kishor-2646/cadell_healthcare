import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styles from './Layout.module.css';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);
