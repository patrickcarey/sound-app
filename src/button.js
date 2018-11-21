import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { id, state, toggleButton, activeStep } = this.props;
    const isActiveStep = activeStep();
    const buttonStepActive = isActiveStep && state === 'active';
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
