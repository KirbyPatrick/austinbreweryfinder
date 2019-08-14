import React, { Component } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import Tablecolumns from "./Tablecolumns";
import { Link } from "react-router-dom";

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
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/${breweryIndex}?key=8a06005f089efcf6a9a451deb0dcbab3`;
    const res = await axios.get(url);
    this.setState({ brewery: res.data["data"] });
    console.log(res.data);
    //Urls for brewery info
  }

  async getBeers() {
    const { breweryIndex } = this.props.match.params;
    const url = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/${breweryIndex}/beers?key=8a06005f089efcf6a9a451deb0dcbab3`;
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
          <a href={website} target="_blank">
            <h1>{name}</h1>
          </a>
          <div>{description}</div>
        </div>
        <br />
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
