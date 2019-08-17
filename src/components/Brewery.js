import React, { Component } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import Tablecolumns from "./Tablecolumns";
import { API_KEY } from "../App";
import GoogleMap from "./GoogleMap";

class Brewery extends Component {
  state = {
    name: "",
    breweryIndex: "",
    imageUrl: "",
    brewery: "",
    beerList: []
  };

  async componentDidMount() {
    this.getBrewery();
    this.getBeers();
  }

  async getBrewery() {
    const { breweryIndex } = this.props.match.params;
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/${breweryIndex}?key=${API_KEY}`;
    const res = await axios.get(url);
    this.setState({ brewery: res.data["data"] });
    console.log(res.data);
    //Urls for brewery info
  }

  async getBeers() {
    const { breweryIndex } = this.props.match.params;
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/${breweryIndex}/beers?key=${API_KEY}`;
    const res = await axios.get(url);
    this.setState({ beerList: res.data["data"] });
    console.log(res.data);
    //Urls for brewery info
  }
  render() {
    const {
      name = "",
      description = "",
      images = "",
      website = ""
    } = this.state.brewery;
    return (
      <React.Fragment>
        <div>
          <img className="center" src={images.medium} alt="" />
          <a href={website} target="_blank" rel="noopener noreferrer">
            <h1>{name}</h1>
          </a>
          <div>{description}</div>
          <div>
            <GoogleMap />
          </div>
        </div>
        <br />
        <h2 className="mb-3">Beers On Tap:</h2>
        <table class="table">
          <Tablecolumns />
          <tbody>
            {this.state.beerList.map(item => (
              <BeerCard beer={item} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Brewery;
