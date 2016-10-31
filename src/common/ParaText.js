import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const paraTextStyle = style({
  color: colors.primaryGray,
  fontSize: '2.5rem',
  lineHeight: '2.8rem',
  fontWeight: '100',
  fontFamily: 'Georgia, Times, "Times New Roman", serif',
  margin: 0,
});

const ParaText = (props) => (
  <p {...paraTextStyle} style={props.style}>
    {props.children}
  </p>
);

export { ParaText };
