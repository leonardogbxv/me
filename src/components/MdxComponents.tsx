import type { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents =  {
  h1: ({ children }) => (
    <h1 style={{fontSize: 'var(--font-size-xl)' }}>{children}</h1>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontSize: 'var(--font-size-sm)',
        fontWeight: 300,
        marginBlock: '22px',
        lineHeight: 'var(--font-size-lg)',
      }}
    >{children}</p>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{ border: '1px solid #464646', padding: '0 22px' }}>{children}</blockquote>
  ),
};
