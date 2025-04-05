import { getPosts } from '@/utils/blogFetchers';
import Article from '@/components/Article/Article';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section>
      {posts.map((post) => (
        <Article
          key={post.slug}
          title={post.metadata.title}
          date={post.metadata.publish_date}
          href={`/blog/${post.slug}`}
        />
      ))}
    </section>
  );
}
