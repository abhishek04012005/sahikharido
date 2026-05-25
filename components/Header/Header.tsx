"use client";
import React from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import Image from 'next/image';
import LogoImage from '../../public/assets/logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src={LogoImage} alt="SahiKharido" width={60} height={40} />
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/blog" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Search">
            <Search size={20} />
          </button>
          <button
            className={`${styles.iconButton} ${styles.mobileMenuBtn}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
