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
    //below is code to filter based on search bar value. not working because state.brewery
    // = null at time of loading. React says can't filter null.

    // let filteredBreweries = this.state.brewery.filter(brewery => {
    //   return brewery.brewery.nameShortDisplay.indexOf(this.props.search) !== -1;
    // });
    return (
      <React.Fragment>
        {/* {console.log("this.state", this.state)} */}
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
          <div className="container">
            <div className="row mt-5">
              <h1>Breweries Loading</h1>
              <div className="spinner-border text-primary ml-4" role="status" />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default BreweryList;
