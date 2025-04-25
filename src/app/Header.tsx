import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/../public/reptile-world-logo.svg';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Link href="/" className={styles.Title}>
        <Image src={logo} width={42} height={42} alt='logo' className={styles.Logo} />
        Reptile World
      </Link>
      <nav className={styles.Navigation}>
        <Link href="/" className={styles.Link}>Home</Link>
        <Link href="#" className={styles.Link}>About</Link>
        <Link href="#" className={styles.Link}>Species</Link>
        <Link href="#" className={styles.Link}>Contact</Link>
      </nav>
      <div className={styles.Action}>
        <Link href="#" className={styles.Link}>Sign In</Link>
        <Link href="#" className={styles.FilledLink}>Sign Up</Link>
      </div>
      <DropdownMenu />
    </header>
  );
}
