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
                  alt="로고"
                  className={styles.Logo}
                />
              </h2>
              <span className={styles.BrandText}>Reptile World</span>
            </div>
            <p className={styles.Description}>
              파충류 정보, 관리 가이드, 종 탐색을 위한 최고의 리소스입니다.
            </p>
          </div>
          <div className={styles.Grid}>
            <div className={styles.GridColumn}>
              <h3 className={styles.SectionTitle}>탐색하기</h3>
              <ul className={styles.LinkList}>
                <li>
                  <Link href="#" className={styles.Link}>
                    종 목록
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    관리 가이드
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    커뮤니티
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    이벤트
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.GridColumn}>
              <h3 className={styles.SectionTitle}>회사</h3>
              <ul className={styles.LinkList}>
                <li>
                  <Link href="#" className={styles.Link}>
                    회사 소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    연락처
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    채용 정보
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    보도자료
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.GridColumn}>
              <h3 className={styles.SectionTitle}>법적 고지</h3>
              <ul className={styles.LinkList}>
                <li>
                  <Link href="#" className={styles.Link}>
                    서비스 이용 약관
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    개인정보 처리방침
                  </Link>
                </li>
                <li>
                  <Link href="#" className={styles.Link}>
                    쿠키 정책
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.Divider}>
          <p className={styles.Copyright}>
            © 2025 Reptile World. 모든 권리 보유.
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
