import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';
import {
  MiniHR,
  ParaText,
  Section,
  SectionHeadingText,
  SectionText
} from '../common';

const sectionStyle = style({
  backgroundColor: colors.white,
  display: 'flex',
});

const ruleStyle = style({
  marginTop: -5
});

const textStyle = style({
  color: colors.primaryGray,
  marginTop: 10
});

const iconWrapper = style({
  flexDirection: 'row',
  marginTop: 20,
});

const iconLink = style({
});

const icon = style({
  maxHeight: 80,
  maxWidth: 80,
  fill: colors.primaryBlue,
  transition: '.33s all ease-in-out',
  ':hover': {
    fill: colors.primaryGray
  }
});

const designedBy = style({
  color: colors.lightGray,
  marginTop: 50
});

const linkStyle = style({
  color: colors.lightGray
});

const About = () => (
  <Section className={sectionStyle}>
    <SectionHeadingText>
      MOAR GOODS
    </SectionHeadingText>
    <MiniHR className={ruleStyle} />
    <SectionText className={textStyle}>
      How To Find Me
    </SectionText>
    <div className={iconWrapper}>
      <a href="https://github.com/mikedklein" className={iconLink} title="GitHub">
        <svg className={icon} viewBox="0 0 512 512">
          <path
            d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9
               0 82.1 53.3 151.8 127.1 176.4 9.3
               1.7 12.3-4 12.3-8.9V389.4c-51.7
               11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2
               -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5
               19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2
               11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9
               19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1
               14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24
               51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1
               29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1
               12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6
               127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
          />
        </svg>
      </a>

      <a href="mailto:mdavidkleinjr@gmail.com" className={iconLink} title="Email">
        <svg className={icon} viewBox="0 0 512 512">
          <path
            d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7
               167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1
               -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7
               84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4
               64.4-49.3V307.8z"
          />
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/michael-klein-52104723" className={iconLink} title="LinkedIn">
        <svg className={icon} viewBox="0 0 512 512">
          <path
            d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5
               -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5
               34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4
               201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0
               0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5
               41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3
               0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"
          />
        </svg>
      </a>

      <a href="https://twitter.com/mikedklein" className={iconLink} title="Twitter">
        <svg className={icon} viewBox="0 0 512 512">
          <path
            d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1
               23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8
               -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4
               79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9
               -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6
               -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2
               -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2
               120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7
               419.6 168.6z"
          />
        </svg>
      </a>
    </div>

    <ParaText className={designedBy}>
      designed by
      <a className={linkStyle} href="http://alexlakas.com/" title='Alex Lakas'> Alex</a>
    </ParaText>
  </Section>
);

export default About;
