import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

const miniHRStyle = style({
  borderBottom: `2px solid ${colors.primaryBlue}`,
  minHeight: 3,
  maxWidth: '8rem',
  minWidth: '8rem',
});

const MiniHR = (props) => (
  <div {...miniHRStyle} style={props.style} />
);

export { MiniHR };
