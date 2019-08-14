import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import Brewery from "./components/Brewery";

export const API_KEY = process.env.REACT_APP_API_KEY;

//production API located in .gitignore file

// const API_ADDRESS = `http://api.brewerydb.com/v2/locations/?key=${API_KEY}`

class App extends Component {
  getBrewery = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations/?key=${API_KEY}&locality=austin`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route exact path="/brewery/:breweryIndex" component={Brewery} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
