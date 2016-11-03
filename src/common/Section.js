import React from 'react';
import { style } from 'glamor';
import { Container } from './';
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

const Section = (props) => {
  let className = `${sectionStyle}`;

  if (props.className !== undefined) {
    className += ` ${props.className}`;
  }

  let content = (
    <Container>
      {props.children}
    </Container>
  );

  if (props.full) {
    content = (
      <div>
        {props.children}
      </div>
    );
  }

  return (
    <section className={className} style={props.style}>
      {content}
    </section>
  );
};

export { Section };
