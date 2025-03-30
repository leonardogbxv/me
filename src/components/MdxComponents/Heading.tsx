import React, { ComponentProps } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = ComponentProps<HeadingTag> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) => {
  const styles: Record<HeadingProps['level'], React.CSSProperties> = {
    1: { fontSize: 'var(--font-size-xl)' },
    2: { fontSize: 'var(--font-size-lg)' },
    3: { fontSize: 'var(--font-size-md)' },
    4: { fontSize: 'var(--font-size-sm)' },
    5: { fontSize: 'var(--font-size-sx)' },
    6: { fontSize: 'var(--font-size-xs)' },
  };

  const Tag: HeadingTag = `h${level}` as HeadingTag;

  return (
    <Tag {...props} style={{ ...styles[level], ...props.style }}>
      {children}
    </Tag>
  );
};

export default Heading;
