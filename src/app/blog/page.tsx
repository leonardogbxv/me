import styles from './page.module.css';

export default function Blog() {
  return (
    <section className={styles.blog}>
      <h1>Blog</h1>

      <article className={styles.post}>
        <h2>Docker and Microservices</h2>
        <pre>
          <time>Outubro 23, 2024</time> — 3min — DevOps
        </pre>
      </article>

      <article className={styles.post}>
        <h2>React Native 0.75</h2>
        <pre>
          <time>Outubro 23, 2024</time> — 3min — DevOps
        </pre>
      </article>
    </section>
  );
}
