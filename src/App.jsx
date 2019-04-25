import React, { Component } from 'react';
import './App.css';

import NameGenerator from './tools/NameGenerator';
class App extends Component {
  render() {
    let generator = new NameGenerator();
    let nomen = generator.generateNomen();
    let age = generator.generateDateOfBirth();
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p>
          Name: {nomen}
        </p>
        <p>
          Born: {age}
        </p>
      </div>
    );
  }
}

export default App;
