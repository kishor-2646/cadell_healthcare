import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'; 

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>

        {/* LEFT: Logo box */}
        <Link to="/" className={styles.logoWrap}>
          <img src={logo} alt="Cadell Healthcare Logo" className={styles.logoImg} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>cadell</span>
            <span className={styles.logoSub}>Healthcare Pvt. Ltd.</span>
          </div>
        </Link>

        {/* CENTER: Nav pill */}
        <div className={styles.navPill}>
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

        {/* RIGHT: Login */}
        <Link to="/login" className={styles.loginBtn}>Login</Link>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
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
    </>
  );
};

export default Navbar;