import React, { Component } from 'react';
import './App.css';

import NameGenerator from './tools/NameGenerator';
class App extends Component {
  render() {
    let string = new NameGenerator().generateNomen();
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p>
          {string}
        </p>
      </div>
    );
  }
}

export default App;
