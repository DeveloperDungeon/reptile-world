'use client'

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './MainSearchForm.module.css';

export default function MainSearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <div className={styles.inputContainer}>
        <div className={styles.searchIcon}>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="파충류 검색하기..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
      </div>
      
      <div className={styles.buttonContainer}>
        <button
          type="submit"
          className={styles.searchButton}
        >
          파충류 검색
        </button>
      </div>
    </form>
  );
}
