import React, { Component } from 'react';
import Button from './button';
import Step from './Step'

import './App.css';

class Grid extends Component {
  render() {

    const { gridLayout, toggleButton, seqStep } = this.props;

    return (
      <div className="Grid">


        {gridLayout.map((step, index) => <Step toggleButton={toggleButton} step={step} index={index} seqStep={()=>seqStep(index)} />)}
      </div>
    );
  }
}

export default Grid;
