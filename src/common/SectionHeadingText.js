import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const sectionHeadingTextStyle = style({
  color: colors.primaryGray,
  fontSize: '3.5rem',
  fontWeight: '400',
  fontFamily: 'Arial',
  margin: 0,
});

const SectionHeadingText = (props) => (
  <h2 {...sectionHeadingTextStyle} style={props.style}>
    {props.children}
  </h2>
);

export { SectionHeadingText };
