import { formatDate } from '@/utils/date';
import { getPostBySlug, getSlugs } from '@/utils/blogFetchers';
import { Metadata } from 'next';
import Comments from '@/components/Comments/Comments';
import styles from './page.module.css';

type BlogPostParams = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getSlugs();
}

export async function generateMetadata(
  { params }: BlogPostParams,
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.metadata.title,
    description: post.metadata.description
  };
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className={styles.post}>
      <header>
        <h1>{post.metadata.title}</h1>
        <pre>
          <time>{formatDate(new Date(post.metadata.publish_date), 'd \'de\' MMMM, yyyy')}</time>
        </pre>
      </header>

      {post.content}

      <Comments />
    </article>
  );
}
