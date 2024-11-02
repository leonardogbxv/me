import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">@leonardogbxv</Link>
        <ul className={styles['nav-list']}>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}
