'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Module from '../common/Module';
import styles from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  pageWindowSize: number;
}

export default function Pagination({ currentPage, totalPages, pageWindowSize }: Props) {
  const [displayPages, setDisplayPages] = useState<number[]>(new Array(Math.min(totalPages, pageWindowSize)).fill(0).map((_, i) => i + 1));

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(pageNumber));
    return `${pathname}?${params.toString()}`;
  };

  function newPageWindowFrom(startPage: number) {
    const newPageWindow = [];
    for (let i = 0; i < pageWindowSize && startPage + i <= totalPages; i++) {
      newPageWindow.push(startPage + i);
    }
    setDisplayPages(newPageWindow);
  }

  function prevPageWindow() {
    if (displayPages.includes(1)) return;

    newPageWindowFrom(Math.max(displayPages[0] - 5, 1));
  }

  function nextPageWindow() {
    if (displayPages.includes(totalPages)) return;

    newPageWindowFrom(Math.min(displayPages[displayPages.length - 1] + 1, totalPages - 4));
  }

  return (
    <Module className={styles.Pagination}>
      <div className={styles.PageInfo}>Showing 1-8 of 24 results</div>
      <div className={styles.Buttons}>
        <MdChevronLeft
          className={
            styles.Left + ' ' + styles.Button +
            (displayPages.includes(1) ? ' ' + styles.Disabled : '')
          }
          onClick={prevPageWindow} />
        {displayPages.map((page) => (
          <Link
            key={`page-${page}`}
            href={createPageURL(page)}
            className={
              styles.Button + ' ' + styles.Number +
              (currentPage === page ? ' ' + styles.Selected : '')
            }>
            {page}
          </Link>
        ))}
        <MdChevronRight
          className={
            styles.Right + ' ' + styles.Button +
            (displayPages.includes(totalPages) ? ' ' + styles.Disabled : '')
          }
          onClick={nextPageWindow} />
      </div>
    </Module>
  );
}
