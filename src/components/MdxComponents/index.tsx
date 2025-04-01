import type { MDXComponents } from 'mdx/types';
import Anchor from './Anchor';
import BlockQuote from './BlockQuote';
import Paragraph from './Paragraph';
import Heading from './Heading';
import MdxMermaid from './MdxMermaid';

const MdxComponents: MDXComponents = {
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  p: Paragraph,
  a: Anchor,
  blockquote: BlockQuote,
  mermaid: MdxMermaid,
};

export default MdxComponents;
