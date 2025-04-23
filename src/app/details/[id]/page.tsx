import Module from '@/app/common/Module';
import BreederData from '@/app/data/BreederData';
import EntityData from '@/app/data/EntityData';
import FamilyMemberData from '@/app/data/FamilyMemberData';
import getDummyDetails from '@/app/dummy/dummy_details';
import Banner from './components/banner/Banner';
import Breeder from './components/breeder/Breeder';
import FamilyTree from './components/family_tree/FamilyTree';
import QuickStats from './components/quickstats/QuickStats';
import styles from './page.module.css';

async function fetchData(id: string): Promise<{
  entity: EntityData,
  bannerImages: string[],
  breeder: BreederData,
  familyTree: FamilyMemberData,
}> {
  return getDummyDetails(id);
}

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { entity, bannerImages, breeder, familyTree } = await fetchData(id);

  return (
    <>
      <Banner entity={entity} bannerImages={bannerImages} />
      <div className={styles.Body}>
        <div className={styles.Lhs}>
          <div className={styles.Breeder}>
            <Breeder breeder={breeder} />
          </div>
          <div className={styles.QuickStats}>
            {entity.details && <QuickStats details={entity.details} />}
          </div>
        </div>
        <div className={styles.Content}>
          <Module className={styles.Description}>{entity.description}</Module>
          <FamilyTree familyTree={familyTree} selectedId={id} />
        </div>
      </div>
    </>
  );
}
