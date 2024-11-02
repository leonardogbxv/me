// import { getPostBySlug } from '@/utils/blogUtils';

import { getPostBySlug, getSlugs } from '@/utils/blogFetchers';

export async function generateStaticParams() {
  return getSlugs();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return <div>{post.content}</div>;
}
