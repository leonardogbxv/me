'use client';
import dynamic from 'next/dynamic';
import type { MermaidProps } from 'mdx-mermaid/lib/Mermaid';

const DynamicMermaid = dynamic(
  () => import('mdx-mermaid/lib/Mermaid').then((res) => res.Mermaid),
  { ssr: false },
);

const MdxMermaid: React.FC<MermaidProps> = ({ ...props }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <DynamicMermaid
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
