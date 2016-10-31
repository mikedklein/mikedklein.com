import React, { Component } from 'react';
import { style } from 'glamor';
import Header from './sections/Header';
import About from './sections/About';


const appStyle = style({
  textAlign: 'center',
  height: '100%',
  width: '100%',
});

class App extends Component {
  render() {
    return (
      <div className={appStyle}>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
