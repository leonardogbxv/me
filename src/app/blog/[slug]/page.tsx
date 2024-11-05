import { formatISODateToLocaleString } from '@/utils/date';
import { getPostBySlug, getSlugs } from '@/utils/blogFetchers';
import styles from './page.module.css';

export async function generateStaticParams() {
  return getSlugs();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className={styles.post}>
      <header>
        <h1>{post.metadata.title}</h1>
        <pre>
          <time>{formatISODateToLocaleString(post.metadata.publish_date)}</time>
        </pre>
      </header>

      {post.content}
    </article>
  );
}
