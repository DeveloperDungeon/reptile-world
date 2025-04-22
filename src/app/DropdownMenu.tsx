'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import styles from './DropdownMenu.module.css';

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <div className={styles.MobileMenuButton} onClick={toggleMenu}>
        <RiMenuLine size={24} />
      </div>
      {isMenuOpen && (
        <div className={styles.MobileMenu}>
          <Link href="/" className={styles.MobileLink}>
            Home
          </Link>
          <Link href="#" className={styles.MobileLink}>
            About
          </Link>
          <Link href="#" className={styles.MobileLink}>
            Species
          </Link>
          <Link href="#" className={styles.MobileLink}>
            Contact
          </Link>
          <div className={styles.MobileActions}>
            <Link href="#" className={styles.MobileLink}>
              Sign In
            </Link>
            <Link href="#" className={styles.MobileFilledLink}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default DropdownMenu;
