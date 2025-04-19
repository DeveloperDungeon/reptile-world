import Banner from './components/Banner';
import Breeder from './components/Breeder';
import { DUMMY_FAMILY_TREES } from './components/family_tree/dummy_family_trees';
import FamilyTree from './components/FamilyTree';
import QuickStats from './components/QuickStats';
import styles from './page.module.css';

async function fetchData(id: string) {
  const idNumber = Number(id);

  const familyTree = DUMMY_FAMILY_TREES[idNumber - 1];

  return {
    familyTree,
  };
}

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { familyTree } = await fetchData(id);

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
          <FamilyTree familyTree={familyTree} selectedId={id} />
        </div>
      </div>
    </>
  );
}
