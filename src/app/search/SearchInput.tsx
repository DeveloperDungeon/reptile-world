'use client'

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import styles from './SearchInput.module.css';

interface Props {
  initialQuery: string;
}

export default function SearchInput({ initialQuery }: Props) {
  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.InputBox + (isFocused ? ' ' + styles.Focused : '')}>
      <CiSearch className={styles.InputIcon} />
      <input
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
        className={styles.Input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder='검색어를 입력하세요' />
      <IoIosClose
        className={styles.InputClear + (inputQuery === '' ? ' ' + styles.Hidden : '')}
        onClick={() => setInputQuery('')} />
    </div>
  );
}
