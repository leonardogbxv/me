import React, { ComponentProps } from 'react';

type ParagraphProps = ComponentProps<'p'>;

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  return (
    <p
      style={{
        fontSize: 'var(--font-size-sm)',
        fontWeight: 300,
        marginBlock: '22px',
        lineHeight: 'var(--font-size-lg)',
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
