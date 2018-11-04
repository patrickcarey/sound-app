import React, { Component } from 'react';
import Button from './button';

import './App.css';

const Step = ({ step = [], index, toggleButton }) => (
  <div className="grid-step">
    <h1>{index + 1}</h1>
    {step.map(props => <Button toggleButton={toggleButton} {...props} />)}
  </div>
);

class Grid extends Component {
  render() {
    const { gridLayout, toggleButton } = this.props;

    return (
      <div className="Grid">
        {gridLayout.map((step, index) => <Step toggleButton={toggleButton} step={step} index={index} />)}
      </div>
    );
  }
}

export default Grid;
