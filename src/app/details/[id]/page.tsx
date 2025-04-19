import Banner from '../Banner';
import Breeder from '../Breeder';
import Content from '../Content';
import QuickStats from '../QuickStats';
import styles from './page.module.css';

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <Banner />
      <div className={styles.Body}>
        <div className={styles.Lhs}>
          <div className={styles.Breeder}>
            <Breeder breeder={{ name: '이하윤', iamgeSrc: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740' }} />
          </div>
          <div className={styles.QuickStats}>
            <QuickStats />
          </div>
        </div>
        <div className={styles.Content}>
          <Content id={id} />
        </div>
      </div>
    </>
  );
}
