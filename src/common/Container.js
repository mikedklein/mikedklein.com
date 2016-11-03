import React from 'react';
import { style } from 'glamor';

const containerStyle = style({
  maxWidth: '80%',
  padding: '10%',
});

const Container = (props) => {
  let className = `${containerStyle}`;

  if (props.className !== undefined) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

export { Container };
