import { redirect } from 'next/navigation';

export default function Home() {
  redirect(encodeURI('/search?q=게코'));
}
