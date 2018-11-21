import React, { Component } from 'react';
import Grid from './Grid'
import Slider from 'rc-slider';

import './App.css';
import 'rc-slider/assets/index.css';

const width = 10;
const height = 3;

function generateInitialGridState({ width = 1, height = 1}) {
  let id = 0;
  const outerMatrix = [];

  for (let i = 0; i < width; i++) {
    const innerMatrix = [];
    for (let j = 0; j < height; j++) {
      innerMatrix.push({ id, state: 'inactive' });
      id++;
    }
    outerMatrix.push(innerMatrix);
  }
  return outerMatrix;
}



class App extends Component {

  state = {
    gridLayout: generateInitialGridState({ width: width, height: height }),
    steps: 8,
    step: 0,
    tempo: 500,
    timerId: ()=> {
      setInterval(
        () => this.setSteps(),
        this.state.tempo
      );
    }
  }

  toggleButton = buttonNumber => this.setState(previous => {
    const gridLength = previous.gridLayout.length;
    const gridHeight = previous.gridLayout[0].length;
    const buttonColumn = Math.floor(buttonNumber / gridHeight);
    const buttonRow = buttonNumber % gridHeight;
    const previousButtonState = previous.gridLayout[buttonColumn][buttonRow].state;
    previous.gridLayout[buttonColumn][buttonRow].state = previousButtonState === 'inactive' ? 'active' : 'inactive'; 
    return previous;
  });

  setSeqStep = stepIndex => {
    if(this.state.step === stepIndex) {
      return true;
    } else {
      return false;
    }
  };

  componentDidMount() {
   this.state.timerId();
  }

  setSteps() {
    this.setState(previous => {
      previous.step = previous.step <= previous.steps - 1 ? previous.step += 1 : 0;
      return previous;
    });
  }

  setTempo(e) {
    this.setState(previous => {
      previous.tempo = e;
      return previous;
    });
  }

  render() {
    return (
      <div className="App">
        <a className="on-off">Start/Stop</a>
        <div className="seq">
          <Slider min={100} max={2000} defaultValue={500} className="Slider--tempo" onChange={(e)=>this.setTempo(e)} />

          <Grid
            className="grid"
            toggleButton={this.toggleButton}
            gridLayout={this.state.gridLayout}
            seqStep={this.setSeqStep} />
        </div>

      </div>
    );
  }
}

export default App;
