'use client';
import type { MermaidProps } from 'mdx-mermaid/lib/Mermaid';
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';

const MdxMermaid: React.FC<MermaidProps> = ({ ...props }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Mermaid
        config={{
          theme: {
            light: 'dark',
            dark: 'dark',
          },
        }}
        {...props}
      />
    </div>
  );
};

export default MdxMermaid;
