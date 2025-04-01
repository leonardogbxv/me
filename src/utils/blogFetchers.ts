import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import mdxMermaid from 'mdx-mermaid';
import MdxComponents from '@/components/MdxComponents';

interface PostMetadata {
  title: string;
  publish_date: string;
  author: string;
  description: string;
  tags: string[];
}

const rehypePrettyCodeOptions: Options = {
  theme: 'dracula',
};

const contentDir = path.join(process.cwd(), 'src/posts');

export async function getPostBySlug(slug: string) {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, content } = await compileMDX<PostMetadata>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, [mdxMermaid]],
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]]
      }
    },
    components: MdxComponents,
  });

  return {
    content,
    metadata: frontmatter,
    slug: path.parse(fileName).name,
  };
}

export async function getPosts() {
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files.map((file) => getPostBySlug(path.parse(file).name))
  );

  return posts;
}

export function getSlugs() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));

  return slugs;
}
