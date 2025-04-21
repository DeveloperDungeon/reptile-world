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
  const [displayPages, setDisplayPages] = useState<number[]>(newPageWindowFrom(currentPage - Math.floor(pageWindowSize / 2)));

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(pageNumber));
    return `${pathname}?${params.toString()}`;
  };

  function newPageWindowFrom(startPage: number) {
    if (startPage < 1) {
      startPage = 1;
    }
    if (startPage > totalPages - pageWindowSize + 1) {
      startPage = totalPages - pageWindowSize + 1;
    }

    const newPageWindow = [];
    for (let i = 0; i < pageWindowSize && startPage + i <= totalPages; i++) {
      newPageWindow.push(startPage + i);
    }
    return newPageWindow;
  }

  function prevPageWindow() {
    if (displayPages.includes(1)) return;

    setDisplayPages(newPageWindowFrom(displayPages[0] - pageWindowSize));
  }

  function nextPageWindow() {
    if (displayPages.includes(totalPages)) return;

    setDisplayPages(newPageWindowFrom(displayPages[displayPages.length - 1] + 1));
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
