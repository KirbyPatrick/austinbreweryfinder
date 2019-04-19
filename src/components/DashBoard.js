import React, { Component } from 'react';
import BreweryList from './BreweryList';

class DashBoard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <BreweryList/>

        </div>
      </div>
    );
  }
}

export default DashBoard;