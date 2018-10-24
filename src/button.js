import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { id, state, toggleButton } = this.props;

    return (
      <div
        onClick={() => toggleButton(id)}
        className={`Button ${ state === 'active' && 'Button--active'}`}>
        {id + 1}
      </div>
    );
  }
}

export default Button;
