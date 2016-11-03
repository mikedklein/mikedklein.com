import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const titleTextStyle = style({
  color: colors.primaryBlue,
  fontSize: '7rem',
  fontWeight: '500',
  fontFamily: 'Arial',
  margin: 0,
});

const TitleText = (props) => (
  <h1 {...titleTextStyle} style={props.style}>
    {props.children}
  </h1>
);

export { TitleText };
