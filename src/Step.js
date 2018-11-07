import React, { Component } from 'react';
import Button from './button'
class Step extends Component {

  componentDidMount() {
   this.makeStep()
    
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  makeStep() {
    console.log(this.props);
  }
  render() {
    const { step = [], index, toggleButton }= this.props;

    return (
    <div className="grid-step">
      <h1>{index + 1}</h1>
      {step.map(props => <Button toggleButton={toggleButton} {...props} />)}
    </div>
    );
  }
}

export default Step;
