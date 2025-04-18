import Banner from '../Banner';
import Content from '../Content';
import QuickStats from '../QuickStats';
import styles from './page.module.css';

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <Banner />
      <div className={styles.Body}>
        <div className={styles.QuickStats}>
          <QuickStats />
        </div>
        <div className={styles.Content}>
          <Content id={id} />
        </div>
      </div>
    </>
  );
}
