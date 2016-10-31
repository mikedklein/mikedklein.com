import React from 'react';
import { style } from 'glamor';
import { container } from 'glamor/ous';
import colors from '../theme/colors';

const sectionStyle = style({
  minHeight: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.primaryBlue,
  color: colors.white
});

const Section = (props) => (
  <section className={sectionStyle} style={props.style}>
    <div className={container}>
      {props.children}
    </div>
  </section>
);

export { Section };
