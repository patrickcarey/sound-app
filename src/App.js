import React, { Component } from 'react';
import Grid from './Grid'
import Slider from 'rc-slider';

import './App.css';
import 'rc-slider/assets/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="controls">
          <Slider className="default volume" />
          <Slider className="default frequency" />
          <Slider className="default carrier" />
          <Slider className="default modulation" />
        </div>
        
        <div className="seq">

          <Grid className="grid" />
          <Grid className="grid" />
        </div>

      </div>
    );
  }
}

export default App;
