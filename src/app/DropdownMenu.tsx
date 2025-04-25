'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import styles from './DropdownMenu.module.css';
import { usePathname } from 'next/navigation';

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className={styles.MenuButton} onClick={toggleMenu}>
        <span className={`${styles.IconWrapper} ${isMenuOpen ? styles.Open : ''}`}>
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </span>
      </div>
      <div className={`${styles.Menu} ${isMenuOpen ? styles.MenuOpen : ''}`}>
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
    </>
  );
}

export default DropdownMenu;
