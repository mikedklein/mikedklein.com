import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';
import { TitleText, ParaText, MiniHR } from '../common';
import me from '../images/Me.jpeg';

const headerStyle = style({
  height: '100%',
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const imgStyle = style({
    height: 150,
    width: 150,
    margin: 0,
    padding: 0,
    border: `2px solid ${colors.primaryBlue}`,
    borderRadius: '50%'
});

const About = () => (
  <div {...headerStyle}>
    <div>
      <img src={me} {...imgStyle} alt="Mike" />
    </div>
    <TitleText>OH HAI!</TitleText>
    <MiniHR style={{ marginTop: '-20px' }} />
    <ParaText style={{ marginTop: '20px' }}>
      My name is Mike and I am a Front End Engineer.
    </ParaText>
  </div>
);

export default About;
