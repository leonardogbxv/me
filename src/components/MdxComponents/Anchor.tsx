import React, { ComponentProps } from 'react';

type AnchorProps = ComponentProps<'a'>;

const Anchor: React.FC<AnchorProps> = ({ ...props }) => {
  return (
    <a style={{ color: 'var(--interactive-accent)' }} {...props} />
  );
};

export default Anchor;
