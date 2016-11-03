import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const paraTextStyle = style({
  color: colors.primaryGray,
  fontSize: '1.5rem',
  lineHeight: '1.8rem',
  fontWeight: '100',
  fontFamily: 'Georgia, Times, "Times New Roman", serif',
  margin: 0,
});

const ParaText = (props) => {
  let className = `${paraTextStyle}`;

  if (props.className !== undefined) {
    className += ` ${props.className}`;
  }

  return (
    <p className={className} style={props.style}>
      {props.children}
    </p>
  );
};

export { ParaText };
