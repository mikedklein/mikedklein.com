import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const sectionTextStyle = style({
  color: colors.white,
  fontSize: '2rem',
  lineHeight: '2.2rem',
  fontWeight: '300',
  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  margin: 0,
});

const SectionText = (props) => {
  let className = `${sectionTextStyle}`;

  if (props.className !== undefined) {
    className += ` ${props.className}`;
  }

  return (
    <p className={className} style={props.style}>
      {props.children}
    </p>
  );
};

export { SectionText };
