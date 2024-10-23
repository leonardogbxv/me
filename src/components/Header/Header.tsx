import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href='/'>@leonardogbxv</a>
        <ul className={styles['nav-list']}>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}
