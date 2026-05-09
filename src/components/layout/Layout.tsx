import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styles from './Layout.module.css';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <Navbar />
      <main className={isHome ? styles.main : styles.mainWithOffset}>
        {children}
      </main>
      <Footer />
    </>
  );
};