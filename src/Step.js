import React, { Component } from 'react';
import Button from './button'

class Step extends Component {

  render() {
    const { step = [], index, toggleButton, seqStep }= this.props;
    const isActive = seqStep();
   
    return (
    <div className={` ${isActive ? 'active' : ''}  grid-step`}>
      <h1>{index + 1}</h1>
      {step.map(props => <Button toggleButton={toggleButton} activeStep={()=>seqStep()} {...props} />)}
    </div>
    );  
  }
}

export default Step;
