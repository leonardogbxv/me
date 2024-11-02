import Link from 'next/link';
import { getPosts } from '@/utils/blogFetchers';
import { formatISODateToLocaleString } from '@/utils/date';
import styles from './page.module.css';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section className={styles.blog}>
      {posts.map((post) => (
        <article key={post.slug} className={styles.post}>
          <Link href={`/blog/${post.slug}`}>
            <h3>{post.metadata.title}</h3>
          </Link>
          <pre>
            <time>{formatISODateToLocaleString(post.metadata.publish_date)}</time>
          </pre>
        </article>
      ))}
    </section>
  );
}
