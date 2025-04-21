import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaStar } from 'react-icons/fa';
import EntityData from '../data/EntityData';
import { DUMMY_ENTITIES } from '../details/[id]/components/family_tree/dummy_family_trees';
import Card from './Card';
import styles from './page.module.css';
import SearchOverview from './SearchOverview';
import Pagination from './Pagination';

const DIFFICULTY_TEXTS = ['입문', '초급', '중급', '상급', '전문가'];

interface Props {
  searchParams: Promise<{
    q?: string;
    page?: number;
  }>;
}

async function fetchSearchResults(): Promise<(EntityData & {
  difficulty: number,
})[]> {
  const difficultyLevels = [1, 1, 2, 4, 4, 1, 2, 3, 5, 1, 3];
  return DUMMY_ENTITIES.map((entity, i) => ({
    ...entity,
    difficulty: difficultyLevels[i],
  }));
}

export default async function SearchPage({ searchParams }: Props) {
  const { q, page } = await searchParams;

  if (q == null || q === '') {
    redirect('/');
  }

  if (page == null || page === 0) {
    redirect(`/search?q=${q}&page=1`);
  }

  const searchResults = await fetchSearchResults();

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
                <div className={styles.Difficulty}>
                  <FaStar className={styles.DifficultyIcon} />{DIFFICULTY_TEXTS[entity.difficulty - 1]}
                </div>
                <Link href={`/details/${entity.id}`} className={styles.Link}>자세히 보기</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Pagination />
    </>
  );
}
