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
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const [displayPages, setDisplayPages] = useState<number[]>(new Array(totalPages).fill(0).map((_, i) => i + 1));

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(pageNumber));
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Module className={styles.Pagination}>
      <div className={styles.PageInfo}>Showing 1-8 of 24 results</div>
      <div className={styles.Buttons}>
        <MdChevronLeft className={styles.Left + ' ' + styles.Button + ' ' + styles.Disabled} />
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
        <MdChevronRight className={styles.Right + ' ' + styles.Button} />
      </div>
    </Module>
  );
}
