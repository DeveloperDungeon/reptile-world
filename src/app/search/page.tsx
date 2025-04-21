import { redirect } from 'next/navigation';
import Card from './Card';
import styles from './page.module.css';
import SearchOverview from './SearchOverview';
import Link from 'next/link';

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

async function fetchSearchResults() {
  return [
    {
      id: 1,
      name: '게코 수컷 1',
      species: '크레스티드 게코',
      gender: 'MALE',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgwy1dOJa3-jpTfRxBmXG6-u-R8IzkG_AGlKLgesk_M2I1i3K4FMA0ZWqAI5HUpZXtqmG2hhfooARUr7r8wa--VA',
      description: '속눈썹 같은 볏과 점프 능력으로 유명한 인기 있는 교목성 도마뱀입니다. 비교적 관리가 쉽습니다.',
      difficulty: 1,
    },
    {
      id: 2,
      name: '게코 수컷 2',
      species: '크레스티드 게코',
      gender: 'MALE',
      imageSrc: 'https://zooboise.org/wp-content/uploads/2024/05/2024-Crested-gecko-block.png',
      description: '뉴칼레도니아 원산지로, 야행성이며 특별한 난방 없이 실온 환경에서도 잘 자랍니다.',
      difficulty: 1,
    },
    {
      id: 3,
      name: '게코 수컷 3',
      species: '크레스티드 게코',
      gender: 'MALE',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3u6sJjAXFVCMI-2ye5DUo0eG8JjyrnvSsTsSzXbLSc8hH6Exs8RNFtQZlhSKcS-jP04c&usqp=CAU',
      description: '주식은 물과 섞은 상업용 게코 푸드 파우더이며, 곤충을 보충해줍니다. 먹이 주기가 간단합니다.',
      difficulty: 2,
    },
    {
      id: 4,
      name: '게코 수컷 4',
      species: '크레스티드 게코',
      gender: 'MALE',
      imageSrc: 'https://i0.wp.com/badgerlandrescue.com/wp-content/uploads/ToBeSorted/360_F_61097391_ynTSjFhpcXEhJCnRE7YJyG33lvBUKCO8.jpg?resize=540%2C360&ssl=1',
      description: '차분한 성격으로 알려져 있지만 점프를 잘 할 수 있습니다. 부드럽게 다루세요. 조심성 있는 초보자에게 좋습니다.',
      difficulty: 4,
    },
    {
      id: 5,
      name: '게코 수컷 5',
      species: '크레스티드 게코',
      gender: 'MALE',
      imageSrc: 'https://www.reptilecentre.com/cdn/shop/articles/what_do_geckos_eat.png?v=1723822970',
      description: '타고 오르거나 숨을 수 있는 충분한 식물이 있는 수직형 테라리움이 필요합니다. 습도 관리에 신경 써야 합니다.',
      difficulty: 4,
    },
    {
      id: 6,
      name: '게코 암컷 1',
      species: '크레스티드 게코',
      gender: 'FEMALE',
      imageSrc: 'https://jonathansjungleroadshow.co.uk/wp-content/uploads/2020/07/crestedgeckos5.jpg',
      description: '다양한 색상과 패턴(모프)으로 유명합니다. 이 개체는 아름다운 패턴을 보여줍니다. 관리가 쉬워 인기 있는 반려동물입니다.',
      difficulty: 1,
    },
    {
      id: 7,
      name: '게코 암컷 2',
      species: '크레스티드 게코',
      gender: 'FEMALE',
      imageSrc: 'https://www.reptiles.swelluk.com/media/catalog/product/c/r/crested_gecko_correlophus_ciliatus.jpg?width=810&height=810&store=swell_reptiles_store_view&image-type=image',
      description: '대부분의 크레스티드 게코처럼, 이 암컷은 비교적 관리가 쉬워 새로운 파충류 사육자에게 적합합니다.',
      difficulty: 2,
    },
    {
      id: 8,
      name: '게코 암컷 3',
      species: '크레스티드 게코',
      gender: 'FEMALE',
      imageSrc: 'https://www.reptilecentre.com/cdn/shop/articles/what_do_geckos_eat.png?v=1723822970',
      description: '일반적으로 쉽지만, 적절한 습도 수준과 균형 잡힌 식단을 보장하는 것이 건강의 핵심입니다. 아주 어렵지는 않습니다.',
      difficulty: 3,
    },
    {
      id: 9,
      name: '게코 암컷 4',
      species: '크레스티드 게코',
      gender: 'FEMALE',
      imageSrc: 'https://www.wilbanksreptiles.com/cdn/shop/collections/BrowseCrestedGeckos.jpg?v=1711131817',
      description: '활발하고 호기심 많은 성격의 크레스티드 게코 암컷입니다. 관리가 용이하여 처음 키우는 분들께도 적합합니다.',
      difficulty: 5,
    },
    {
      id: 10,
      name: '게코 암컷 5',
      species: '크레스티드 게코',
      gender: 'FEMALE',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4bBWj5M_BSvAh1xXwB4v0dBG1sdyNza5GE1ZK2kxSdGfPDIYZmD4QMeYPS0fFNRMWdI&usqp=CAU',
      description: '아름다운 외모를 가진 크레스티드 게코 암컷입니다. 야행성으로, 저녁 시간에 활동하는 모습을 관찰할 수 있습니다.',
      difficulty: 1,
    },
    {
      id: 11,
      name: '게코 수컷 6',
      species: '크레스티드 게코',
      gender: 'MALE',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDRi2eZVNfazn4JZezD2w5unH6eQbLmGpssgc9FiLWDCvOPaF_qc9YCf_YdVKwqTCuf0&usqp=CAU',
      description: '튼튼하고 건강한 크레스티드 게코 수컷입니다. 적절한 환경만 갖춰주면 키우기 어렵지 않습니다.',
      difficulty: 3,
    },
  ];
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const searchResults = await fetchSearchResults();

  if (q == null || q === '') {
    redirect('/');
  }

  return (
    <>
      <SearchOverview query={q} resultsCount={searchResults.length} />

      <div className={styles.SearchResultsWrapper}>
        {searchResults.map((entity) => (
          <Card
            key={`search-result-${entity.id}`}
            image={entity.imageSrc}>
            <div className={styles.SearchResultContentWrapper}>
              <h3 className={styles.Name}>{entity.name}</h3>
              <p className={styles.Description}>{entity.description}</p>
              <div className={styles.Footer}>
                <div className={styles.Difficulty}>사육 난이도: {entity.difficulty}</div>
                <Link href={`/details/${entity.id}`} className={styles.Link}>자세히 보기</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
