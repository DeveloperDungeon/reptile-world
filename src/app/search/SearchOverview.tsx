
import Module from '../common/Module';
import SearchInput from './SearchInput';
import styles from './SearchOverview.module.css';

interface Props {
  query: string;
  resultsCount: number;
}

export default function SearchOverview({ query, resultsCount }: Props) {

  return (
    <Module className={styles.SearchOverview}>
      <div className={styles.Header}>
        <h3>&ldquo;{query}&ldquo;에 대한 검색 결과</h3>
        <SearchInput initialQuery={query} />
      </div>
      <div className={styles.ResultsCount}>{resultsCount}개의 결과</div>
    </Module>
  );
}
