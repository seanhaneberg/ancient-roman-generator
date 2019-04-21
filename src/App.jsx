import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameGenerator from './tools/NameGenerator';
class App extends Component {
  render() {
    let string = new NameGenerator().testMessage();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {string}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
