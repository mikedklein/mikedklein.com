import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';
import { Section, SectionText } from '../common';

const cover = style({
  position: 'absolute',
  minHeight: '100%',
  minWidth: '100%',
  top: 0,
  left: 0,
  zIndex: 1,
  backgroundColor: colors.coverRGB,
});

const centeredText = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,
  minHeight: '100%',
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const About = () => (
  <Section
    style={{
      backgroundImage: 'url(\'https://source.unsplash.com/1600x900/?washington+dc\')',
      backgroundSize: 'cover',
      position: 'relative'
    }}
    full
  >
    <div className={cover} />
    <div className={centeredText}>
      <SectionText>
        Currently residing just outside our nation’s capital.
      </SectionText>
    </div>
  </Section>
);

export default About;
