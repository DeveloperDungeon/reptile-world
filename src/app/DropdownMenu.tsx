'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import styles from './DropdownMenu.module.css';

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className={styles.MenuButton} onClick={toggleMenu}>
        <RiMenuLine size={24} />
      </div>
      {isMenuOpen && (
        <div className={styles.Menu}>
          <Link href="/" className={styles.Link}>
            Home
          </Link>
          <Link href="#" className={styles.Link}>
            About
          </Link>
          <Link href="#" className={styles.Link}>
            Species
          </Link>
          <Link href="#" className={styles.Link}>
            Contact
          </Link>
          <div className={styles.Actions}>
            <Link href="#" className={styles.Link}>
              Sign In
            </Link>
            <Link href="#" className={styles.FilledLink}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default DropdownMenu;
