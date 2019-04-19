import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';

const API_KEY = "8a06005f089efcf6a9a451deb0dcbab3"

const API_ADDRESS = `http://api.brewerydb.com/v2/locations/?key=${API_KEY}`

class App extends Component {
  render() {
    return (
      <div>
        <Title/>
      </div>
    );
  }
}

export default App;
