import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import BreweryCard from './components/BreweryCard';

const API_KEY = "8a06005f089efcf6a9a451deb0dcbab3"

// const API_ADDRESS = `http://api.brewerydb.com/v2/locations/?key=${API_KEY}`

class App extends Component {
  getBrewery = async () => {
    const api_call = await fetch(`http://api.brewerydb.com/v2/locations/?key=${API_KEY}`);
  }
  
  render() {
    return (
      <div>
        <Title/>
        <SearchBar/>
        <BreweryCard/>
      </div>
    );
  }
}

export default App;
