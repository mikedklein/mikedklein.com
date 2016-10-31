import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const sectionTextStyle = style({
  color: colors.white,
  fontSize: '3.5rem',
  lineHeight: '3.8rem',
  fontWeight: '300',
  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  margin: 0,
});

const SectionText = (props) => (
  <p {...sectionTextStyle} style={props.style}>
    {props.children}
  </p>
);

export { SectionText };
