import React from 'react';
import { style } from 'glamor';
import { Section, SectionText } from '../common';
//TODO Need to replace this with an SVG that I like better
import inhand from '../images/inhand.png';


const inHandStyle = style({
  height: 100,
  width: 100,
  marginBottom: 50
});

const About = () => (
  <Section>
    <img {...inHandStyle} src={inhand} alt="In Hand" />
    <SectionText>
      I've been doing this for about 7 years now for small start-ups to
      enterprise level government solutions. I'm currently applying my
      craft for small health tech start-up in Reston, VA.
    </SectionText>
  </Section>
);

export default About;
