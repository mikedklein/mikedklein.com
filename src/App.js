import React, { Component } from 'react';
import { style } from 'glamor';
import Header from './sections/Header';
import About from './sections/About';
import Live from './sections/Live';
import Moar from './sections/Moar';


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
        <Live />
        <Moar />
      </div>
    );
  }
}

export default App;
