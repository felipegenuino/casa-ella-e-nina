"use client"

// src/app/components/Header.js
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Casa Boutique Ella & Nina</Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <ul>
          <li>
            <Link href="/casa-ella">Casa Ella</Link>
          </li>
          <li>
            <Link href="/casa-nina">Casa Nina</Link>
          </li>
          <li>
            <Link href="/#about">Sobre</Link>
          </li>
          <li>
            <Link href="/#contact">Contato</Link>
          </li>
          <li>
            <Link href="/#booking">Reservar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}