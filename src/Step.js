import React, { Component } from 'react';
import Button from './button'

class Step extends Component {


  render() {
    const { step = [], index, toggleButton, seqStep }= this.props;

    return (
    <div className={`grid-step ${index}`}>
      <h1>{index + 1}</h1>
      {step.map(props => <Button toggleButton={toggleButton} {...props} />)}
    </div>
    );  
  }
}

export default Step;
