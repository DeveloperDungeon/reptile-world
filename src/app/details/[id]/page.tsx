import Banner from './components/Banner';
import Breeder from './components/Breeder';
import { DUMMY_ENTITIES, DUMMY_FAMILY_TREES } from './components/family_tree/dummy_family_trees';
import FamilyMemberData from './components/family_tree/FamilyMemberData';
import FamilyTree from './components/FamilyTree';
import QuickStats from './components/QuickStats';
import styles from './page.module.css';

async function fetchData(id: string) {
  const idNumber = Number(id) - 1;

  const familyTree = DUMMY_FAMILY_TREES[idNumber];
  const dummyEntity = DUMMY_ENTITIES[idNumber];
  const entity: FamilyMemberData & { bannerImages: string[] } = {
    ...dummyEntity,
    bannerImages: [
      dummyEntity.imageSrc,
      'https://readdy.ai/api/search-image?query=A%2520professional%2520detailed%2520photograph%2520of%2520a%2520bearded%2520dragon%2520lizard%2520with%2520vibrant%2520orange%2520and%2520tan%2520coloration%2C%2520showing%2520its%2520textured%2520scales%2C%2520spikes%2C%2520and%2520beard.%2520The%2520lizard%2520is%2520in%2520an%2520alert%2520pose%2520on%2520a%2520natural%2520rock%2520formation%2520with%2520desert%2520plants%2520in%2520the%2520background.%2520Soft%2520natural%2520lighting%2520highlights%2520its%2520features%2520with%2520a%2520shallow%2520depth%2520of%2520field%2520creating%2520a%2520professional%2520wildlife%2520photography%2520aesthetic.&width=1200&height=600&seq=101&orientation=landscape',
      'https://readdy.ai/api/search-image?query=A%2520close-up%2520professional%2520photograph%2520of%2520a%2520bearded%2520dragon%2520face%2520showing%2520detailed%2520scales%2C%2520spikes%2C%2520and%2520expressive%2520eyes.%2520The%2520image%2520captures%2520the%2520intricate%2520texture%2520of%2520its%2520skin%2520and%2520the%2520unique%2520facial%2520features%2520with%2520perfect%2520clarity.%2520Shot%2520with%2520studio%2520lighting%2520against%2520a%2520neutral%2520background%2520to%2520highlight%2520the%2520reptiles%2520natural%2520coloration%2520and%2520distinctive%2520characteristics.&width=400&height=400&seq=102&orientation=squarish',
      'https://readdy.ai/api/search-image?query=A%2520professional%2520photograph%2520of%2520a%2520bearded%2520dragon%2520in%2520a%2520natural%2520terrarium%2520habitat%2520with%2520desert%2520decor%2C%2520rocks%2C%2520branches%2C%2520and%2520appropriate%2520substrate.%2520The%2520enclosure%2520is%2520well-designed%2520with%2520proper%2520lighting%2520and%2520temperature%2520gradients.%2520The%2520image%2520shows%2520the%2520lizard%2520comfortably%2520basking%2520under%2520a%2520heat%2520lamp%2C%2520demonstrating%2520ideal%2520reptile%2520husbandry%2520conditions.&width=400&height=400&seq=103&orientation=squarish',
      'https://readdy.ai/api/search-image?query=A%2520professional%2520photograph%2520of%2520a%2520bearded%2520dragon%2520eating%2520insects%2520from%2520a%2520feeding%2520dish.%2520The%2520image%2520clearly%2520shows%2520the%2520lizards%2520feeding%2520behavior%2520with%2520its%2520mouth%2520open%2C%2520capturing%2520the%2520moment%2520it%2520consumes%2520its%2520prey.%2520The%2520lighting%2520is%2520bright%2520and%2520clear%2C%2520highlighting%2520the%2520natural%2520feeding%2520process%2520of%2520this%2520reptile%2520species.&width=400&height=400&seq=104&orientation=squarish',
      'https://readdy.ai/api/search-image?query=A%2520professional%2520photograph%2520of%2520a%2520person%2520gently%2520handling%2520a%2520bearded%2520dragon%2C%2520demonstrating%2520proper%2520reptile%2520handling%2520technique.%2520The%2520lizard%2520appears%2520calm%2520and%2520comfortable%2C%2520resting%2520on%2520the%2520persons%2520palm%2520with%2520support%2520under%2520its%2520body.%2520The%2520image%2520shows%2520the%2520bond%2520between%2520owner%2520and%2520pet%2C%2520with%2520natural%2520lighting%2520highlighting%2520both%2520the%2520human%2520and%2520reptile%2520subject.&width=400&height=400&seq=105&orientation=squarish',
    ],
  };

  return {
    familyTree,
    entity,
  };
}

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { familyTree, entity } = await fetchData(id);

  return (
    <>
      <Banner entity={entity} />
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
