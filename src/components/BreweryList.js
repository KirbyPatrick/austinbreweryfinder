import React, { Component } from 'react';

import BreweryCard from './BreweryCard';

class BreweryList extends Component {
  render() {
    return (
      <div>
        <BreweryCard/>
        <BreweryCard/>
        <BreweryCard/>
        <BreweryCard/>
        <BreweryCard/>
        <BreweryCard/>
      </div>
    );
  }
}

export default BreweryList;