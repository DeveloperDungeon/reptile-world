import styles from './page.module.css';

export default function DetailsPage() {
  return (
    <>
      <div className={styles.Banner}></div>
      <div className={styles.Body}>
        <div className={styles.QuickStats}></div>
        <div className={styles.Content}></div>
      </div>
    </>
  );
}
