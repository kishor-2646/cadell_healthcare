import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { label: 'Home',     to: '/'        },
    { label: 'About',    to: '/about'   },
    { label: 'Products', to: '/products'},
    { label: 'Contact',  to: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Logo — top left */}
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="Cadell Healthcare" className={styles.logo} />
        </Link>

        {/* Nav links — center */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`${styles.navLink} ${pathname === link.to ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — right */}
        <div className={styles.right}>
          <Link to="/contact" className={styles.ctaBtn}>GET IN TOUCH</Link>
          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.mobileDrawer}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`${styles.mobileLink} ${pathname === link.to ? styles.mobileLinkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className={styles.mobileCtaBtn} onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;