import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logobg.png';

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

      {/* ── ROW 1: MENU · LOGO CENTER · LOGIN ── */}
      <div className={styles.topBar}>

        {/* Left — desktop placeholder / mobile hamburger */}
        <div className={styles.topLeft}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles.barsWrap}>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </div>
            <span className={styles.menuLabel}>MENU</span>
          </button>
        </div>

        {/* Center — Logo + Brand */}
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="Cadell Healthcare" className={styles.brandLogo} />
          <div className={styles.brandText}>
            <span className={styles.brandName}>Cadell</span>
            <span className={styles.brandSub}>Healthcare Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Right — Login */}
        <div className={styles.topRight}>
          <Link to="/login" className={styles.loginBtn}>Login</Link>
        </div>

      </div>

      {/* ── ROW 2: NAV STRIP ── */}
      <nav className={styles.navStrip}>
        <div className={styles.navInner}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`${styles.navLink} ${pathname === link.to ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
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
          <Link to="/login" className={styles.mobileLoginBtn} onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}

    </header>
  );
};

export default Navbar;