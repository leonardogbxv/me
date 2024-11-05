import styles from './page.module.css';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.blog}>
      {children}
    </div>
  );
}
