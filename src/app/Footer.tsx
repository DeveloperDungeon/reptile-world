import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import logo from '@/../public/reptile-world-logo.svg';
import {
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
} from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.FlexColumn}>
          <div className={styles.ContentContainer}>
            <div className={styles.LogoContainer}>
              <h2 className={styles.LogoText}>
                <Image
                  src={logo}
                  width={42}
                  height={42}
                  alt="logo"
                  className={styles.Logo}
                />
              </h2>
              <span className={styles.BrandText}>Reptile World</span>
            </div>
            <p className={styles.Description}>
              Your ultimate resource for reptile information, care guides, and
              species discovery.
            </p>
          </div>
          <div className={styles.Grid}>
            <div className={styles.GridColumn}>
              <h3 className={styles.SectionTitle}>Explore</h3>
              <ul className={styles.LinkList}>
                <li>
                  <Link href="#" className={styles.Link}>
                    Species
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Care Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.GridColumn}>
              <h3 className={styles.SectionTitle}>Company</h3>
              <ul className={styles.LinkList}>
                <li>
                  <Link href="#" className={styles.Link}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.GridColumn}>
              <h3 className={styles.SectionTitle}>Legal</h3>
              <ul className={styles.LinkList}>
                <li>
                  <Link href="#" className={styles.Link}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.Divider}>
          <p className={styles.Copyright}>
            © 2025 Reptile World. All rights reserved.
          </p>
          <div className={styles.SocialIcons}>
            <Link href="#" className={styles.SocialIcon}>
              <RiFacebookFill />
            </Link>
            <Link href="#" className={styles.SocialIcon}>
              <RiTwitterXFill />
            </Link>
            <Link href="#" className={styles.SocialIcon}>
              <RiInstagramFill />
            </Link>
            <Link href="#" className={styles.SocialIcon}>
              <RiYoutubeFill />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
