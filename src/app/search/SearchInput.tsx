'use client'

import { useRouter } from 'next/navigation';
import { KeyboardEvent, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import styles from './SearchInput.module.css';

interface Props {
  initialQuery: string;
}

export default function SearchInput({ initialQuery }: Props) {
  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  function onKeyDown(e: KeyboardEvent) {
    const q = inputQuery.trim();
    if (q === '') return;

    if (e.key === 'Enter') {
      router.push(`/search?q=${q}`);
    }
  }

  return (
    <div className={styles.InputBox + (isFocused ? ' ' + styles.Focused : '')}>
      <CiSearch className={styles.InputIcon} />
      <input
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
        className={styles.Input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={onKeyDown}
        placeholder='검색어를 입력하세요' />
      <IoIosClose
        className={styles.InputClear + (inputQuery === '' ? ' ' + styles.Hidden : '')}
        onClick={() => setInputQuery('')} />
    </div>
  );
}
