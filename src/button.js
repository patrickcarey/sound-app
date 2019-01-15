import React, { Component } from 'react';
import { OSC } from './Synth';



class Button extends Component {
  render() {
    const { id, state, toggleButton, activeStep } = this.props;
    const isActiveStep = activeStep();
    const buttonStepActive = isActiveStep && state === 'active';

    OSC({
      freq:440, 
      play: buttonStepActive ? 1 : 0,
      randType: 1,
      attackTime: 0.1,
      releaseTime:0.1,
      randFreq: 1,
      freqMult: 4,
    });
    
      return (
      <div
        onClick={() => toggleButton(id)}
        className={`Button ${ state === 'inactive' && 'Button--active'} ${ buttonStepActive ? 'Button--live' : ''}`}>
        {id + 1}
      </div>
    );
  }
}

export default Button;
