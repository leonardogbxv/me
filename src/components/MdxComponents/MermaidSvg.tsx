import React, { ComponentProps } from 'react';

type SvgProps = ComponentProps<'svg'>;

const MermaidSvg: React.FC<SvgProps> = ({ children, ...props }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <svg {...props}>
        {children}
      </svg>
    </div>
  );
};

export default MermaidSvg;
