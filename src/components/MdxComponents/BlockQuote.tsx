import React, { ComponentProps } from 'react';

type BlockQuoteProps = ComponentProps<'blockquote'>;

const BlockQuote: React.FC<BlockQuoteProps> = ({ children, ...props }) => {
  return (
    <blockquote
      style={{
        borderLeft: '4px solid var(--interactive-accent)',
        padding: '0 22px',
        color: '#bababa',
      }}
      {...props}
    >
      {children}
    </blockquote>
  );
};

export default BlockQuote;
