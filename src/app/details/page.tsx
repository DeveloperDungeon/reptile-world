import Module from './Module';
import styles from './page.module.css';

export default function DetailsPage() {
  return (
    <>
      <Module className={styles.Banner} />
      <div className={styles.Body}>
        <Module className={styles.QuickStats} />
        <Module className={styles.Content} />
      </div>
    </>
  );
}
