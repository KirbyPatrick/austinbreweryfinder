import React, { Component } from "react";
import axios from "axios";
import { API_KEY } from "../App";

import BreweryCard from "./BreweryCard";

class BreweryList extends Component {
  state = {
    url: `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations?key=${API_KEY}`,
    brewery: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ brewery: res.data["data"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.brewery ? (
          <div className="row">
            {this.state.brewery.map(brewery => (
              <BreweryCard
                key={brewery.id}
                breweryIndex={brewery.brewery.id}
                name={brewery.brewery.nameShortDisplay}
                streetAddress={brewery.streetAddress}
                city={brewery.locality}
                locationState={brewery.region}
                zipCode={brewery.postalCode}
                url={
                  brewery.brewery.images
                    ? brewery.brewery.images.medium
                    : "https://via.placeholder.com/100"
                }
              />
            ))}
          </div>
        ) : (
          // <h1 className="mt-5">Breweries Loading...</h1>
          <div className="container">
            <div className="row mt-5">
              <h1>Breweries Loading</h1>
              <div className="spinner-border text-primary ml-4" role="status" />
              <div className="spinner-border text-primary ml-4" role="status" />
              <div className="spinner-border text-primary ml-4" role="status" />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default BreweryList;
