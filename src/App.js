import React, { Component } from 'react';
import Grid from './Grid'
import Slider from 'rc-slider';

import './App.css';
import 'rc-slider/assets/index.css';

function generateInitialGridState({ width = 1, height = 1}) {
  let id = 0;
  const outerMatrix = [];

  for (let i = 0; i < width; i++) {
    const innerMatrix = [];
    for (let j = 0; j < height; j++) {
      innerMatrix.push({ id, state: 'active' });
      id++;
    }
    outerMatrix.push(innerMatrix);
  }

  return outerMatrix;
}

class App extends Component {
  state = {
    gridLayout: generateInitialGridState({ width: 8, height: 3 })
  }

  toggleButton = buttonNumber => this.setState(previous => {
    const gridLength = previous.gridLayout.length;
    const gridHeight = previous.gridLayout[0].length;
    const buttonColumn = Math.floor(buttonNumber / gridHeight);
    const buttonRow = buttonNumber % gridHeight;
    const previousButtonState = previous.gridLayout[buttonColumn][buttonRow].state;
    previous.gridLayout[buttonColumn][buttonRow].state = previousButtonState === 'active' ? 'inactive' : 'active'; 
    return previous;
  });

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
          <Grid
            className="grid"
            toggleButton={this.toggleButton}
            gridLayout={this.state.gridLayout} />
        </div>

      </div>
    );
  }
}

export default App;
