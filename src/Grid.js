import React, { Component } from 'react';
import Button from './button';

import './App.css';

class Grid extends Component {
  render() {
    return (
      <div className="Grid">
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <Button className="Button-push" />
        <header className="App-header"></header>
      </div>
    );
  }
}

export default Grid;
