import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = "8a06005f089efcf6a9a451deb0dcbab3"

const API_ADDRESS = "http://api.brewerydb.com/v2/locations/?key=8a06005f089efcf6a9a451deb0dcbab3"
//example of address to call random beer.  

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello world.
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
