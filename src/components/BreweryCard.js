import React from "react";
import '../App.css';
import styled from "styled-components";

class BreweryCard extends React.Component {
  state ={
    name: '',
    imageUrl: '',
    breweryIndex: ''
  }



  render() {

    const {name, streetAddress, city, locationState, zipCode, url} = this.props;

    console.log(url);

    const length = 18;
    const trimmedName = name.substring(0, length) + "..";


    // const name = this.props.name;
    // const streetAddress = this.props.streetAddress;
    // const city = this.props.city;
    // const locationState = this.props.locationState;
    // const zipCode = this.props.zipCode

    return(
      <div className="col-med-3 col-sm-3 mb-5">
        <div className="card">
          <h5 className="card-header">{trimmedName}</h5> <br/>
          <h6 className="card-info mx-auto">{streetAddress}. <br/>
          {city}, {locationState} {zipCode} </h6>
        </div>
      </div>
    );
  }
};

export default BreweryCard;