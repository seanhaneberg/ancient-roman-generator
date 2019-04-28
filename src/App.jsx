import React, { Component } from 'react';
import './App.css';

import RomanFactory from './tools/RomanFactory';
class App extends Component {
  render() {
    let generator = new RomanFactory();
    let count = Math.floor(Math.random() * 5) + 1;
    let romans = generator.generateRomans(count);

    let romansJSX = romans.map((roman) => {
      return (
        <div>
          <p>
            Name: {roman.getNameString()}
          </p>
          <p>
            Born: {roman.getBirthdayString()}
          </p>
          <p>
            {roman.getFemmeString()} Age: {roman.getAge()}
          </p>
          <p>
            Lives on: {roman.getHillName()}
          </p>
          <hr />
        </div>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
        </header>
        {romansJSX}
      </div>
    );
  }
}

export default App;
