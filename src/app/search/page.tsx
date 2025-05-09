import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaStar } from 'react-icons/fa';
import EntityData, { DIFFICULTY_TEXTS } from '../data/EntityData';
import getDummySearch from '../dummy/dummy_search';
import Card from './Card';
import styles from './page.module.css';
import Pagination from './Pagination';
import SearchOverview from './SearchOverview';

interface Props {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export type SearchEntityData = EntityData & {
  details: {
    difficulty: number,
  },
};

const RESULTS_SIZE_PER_PAGE = 6;

async function fetchSearchResults(q: string): Promise<SearchEntityData[]> {
  return getDummySearch().filter((entity) => entity.name.includes(q) || entity.id.includes(q));
}

export default async function SearchPage({ searchParams }: Props) {
  const { q, page: pageString } = await searchParams;

  if (q == null || q === '') {
    redirect('/');
  }

  if (pageString == null) {
    redirect(`/search?q=${encodeURIComponent(q)}&page=1`);
  }

  const page = parseInt(pageString, 10);
  if (isNaN(page) || page <= 0) {
    redirect(`/search?q=${encodeURIComponent(q)}&page=1`);
  }

  const searchResults = await fetchSearchResults(q);
  const totalResults = searchResults.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / RESULTS_SIZE_PER_PAGE));
  const paginatedResults = searchResults.slice((page - 1) * RESULTS_SIZE_PER_PAGE, page * RESULTS_SIZE_PER_PAGE);

  return (
    <>
      <SearchOverview query={q} resultsCount={totalResults} />

      <div className={styles.SearchResultsWrapper}>
        {paginatedResults.map((entity) => (
          <Card
            key={`search-result-${entity.id}`}
            image={entity.imageSrc}>
            <div className={styles.SearchResultContentWrapper}>
              <h3 className={styles.Name}>{entity.name}</h3>
              <p className={styles.Description}>{entity.description}</p>
              <div className={styles.Footer}>
                <div className={styles.Difficulty}>
                  <FaStar className={styles.DifficultyIcon} />{DIFFICULTY_TEXTS[entity.details.difficulty - 1]}
                </div>
                <Link href={`/details/${entity.id}`} className={styles.Link}>자세히 보기</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        pageWindowSize={5}
        resultsPerPage={RESULTS_SIZE_PER_PAGE}
        totalResults={searchResults.length} />
    </>
  );
}
