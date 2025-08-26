'use client';

import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <h1 className={styles.title}>Navigation</h1>
        <p className={styles.subtitle}>
          Click these links to go to other parts of my website!
        </p>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
          <Link href="/about" className={styles.link}>
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}