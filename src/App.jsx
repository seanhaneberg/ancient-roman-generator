import React, { Component } from 'react';
import './App.css';

import RomanFactory from './tools/RomanFactory';
class App extends Component {
  render() {
    let generator = new RomanFactory();
    let roman = generator.generateRoman();
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p>
          Name: {roman.getNameString()}
        </p>
        <p>
          Born: {roman.getBirthdayString()}
        </p>
        <p>
         {roman.getFemmeString()} Age: {roman.getAge()}
        </p>
      </div>
    );
  }
}

export default App;
