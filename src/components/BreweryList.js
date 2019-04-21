import React, { Component } from 'react';
import axios from 'axios';

import BreweryCard from './BreweryCard';

class BreweryList extends Component {
  state= {
    url: "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations?key=8a06005f089efcf6a9a451deb0dcbab3",
    brewery: null
  };

async componentDidMount() {
  const res = await axios.get(this.state.url)
  this.setState({brewery: res.data['data']});
}
  render() {
    return (
      <React.Fragment>
        {this.state.brewery ? (
          <div className="row">
            {this.state.brewery.map( brewery => (
              <BreweryCard 
              key = {brewery.id}
              name = {brewery.brewery.name}
              image = {brewery.brewery.images}
              />
            ))}
          </div>
        ) : (
          <h1>Brewerys Loading...</h1>
        )}
      </React.Fragment>
    );
  }
}

export default BreweryList;

