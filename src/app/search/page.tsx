import { redirect } from 'next/navigation';
import SearchOverview from './SearchOverview';

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;

  if (q == null || q === '') {
    redirect('/');
  }

  return (
    <>
      <SearchOverview query={q} resultsCount={24} />
    </>
  );
}
