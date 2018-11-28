import React, { Component } from 'react';

class Run extends Component {
  

  render() {
      const { toggleSequence, runValue } = this.props;
      const buttonValue = runValue ? 'STOP' : 'RUN';
      return (
        <button className="Run-button" onClick={() => toggleSequence()}> {buttonValue} </button>
    );
  }
}

export default Run;
