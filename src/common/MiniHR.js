import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const miniHRStyle = style({
  borderBottom: `2px solid ${colors.primaryBlue}`,
  minHeight: 3,
  margin: '0 auto',
  maxWidth: '8rem',
  minWidth: '8rem',
});

const MiniHR = (props) => {
  let className = `${miniHRStyle}`;

  if (props.className !== undefined) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className} style={props.style} />
  );
};

export { MiniHR };
