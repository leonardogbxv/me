import Link from 'next/link';
import { getPosts } from '@/utils/blogFetchers';
import { formatDate } from '@/utils/date';
import styles from './page.module.css';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section>
      {posts.map((post) => (
        <article key={post.slug} className={styles['post-item']}>
          <Link href={`/blog/${post.slug}`}>
            <h3>{post.metadata.title}</h3>
          </Link>
          <pre>
            <time>{formatDate(new Date(post.metadata.publish_date), 'd \'de\' MMMM, yyyy')}</time>
          </pre>
        </article>
      ))}
    </section>
  );
}
