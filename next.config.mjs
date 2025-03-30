import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import mdxMermaid from 'mdx-mermaid';

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'dracula',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, [mdxMermaid.default, {output: 'svg'}]],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);
