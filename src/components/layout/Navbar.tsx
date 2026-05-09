import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { navItems } from '../../data/navigation';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topInner}>
            <div className={styles.topLeft}>
              <a href="mailto:info@cadellhealthcare.com" className={styles.topItem}>
                <FiMail size={13} /><span>info@cadellhealthcare.com</span>
              </a>
              <span className={styles.divider} />
              <span className={styles.topItem}>
                <FiMapPin size={13} /><span>No. C-69, Yadavagiri Industrial Estate, Mysore</span>
              </span>
            </div>
            <a href="tel:+918212970300" className={styles.topPhone}>
              <FiPhone size={13} /><span>+91 – 821 – 2970300</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo */}
            <Link to="/" className={styles.logo}>
              <div className={styles.logoMark}>
                <span className={styles.logoC}>C</span>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>cadell</span>
                <span className={styles.logoSub}>Healthcare Pvt. Ltd.</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.path} className={`${styles.navItem} ${item.children ? styles.hasChildren : ''}`}>
                  <Link
                    to={item.path}
                    className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                  >
                    {item.label}
                    {item.children && <FiChevronDown size={14} />}
                  </Link>
                  {item.children && (
                    <ul className={styles.dropdown}>
                      {item.children.map(child => (
                        <li key={child.path}>
                          <Link to={child.path} className={styles.dropdownLink}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.drawerList}>
          {navItems.map((item) => (
            <li key={item.path}>
              {item.children ? (
                <>
                  <button className={styles.drawerItem} onClick={() => setProductsOpen(!productsOpen)}>
                    {item.label} <FiChevronDown size={16} style={{ transform: productsOpen ? 'rotate(180deg)' : '', transition: '0.3s' }} />
                  </button>
                  {productsOpen && (
                    <ul className={styles.drawerSub}>
                      {item.children.map(c => (
                        <li key={c.path}><Link to={c.path} className={styles.drawerSubLink}>{c.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} className={`${styles.drawerItem} ${location.pathname === item.path ? styles.drawerActive : ''}`}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
