import Banner from './Banner';
import Content from './Content';
import styles from './page.module.css';
import QuickStats from './QuickStats';

export default function DetailsPage() {
  return (
    <>
      <Banner />
      <div className={styles.Body}>
        <div className={styles.QuickStats}>
          <QuickStats />
        </div>
        <div className={styles.Content}>
          <Content />
        </div>
      </div>
    </>
  );
}
