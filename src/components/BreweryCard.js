import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select:none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class BreweryCard extends React.Component {
  state ={
    name: '',
    imageUrl: '',
    breweryIndex: ''
  }

  render() {

    const {name, streetAddress, city, locationState, zipCode, url} = this.props;

    console.log(url);

    // const name = this.props.name;
    // const streetAddress = this.props.streetAddress;
    // const city = this.props.city;
    // const locationState = this.props.locationState;
    // const zipCode = this.props.zipCode

    return(
      <div className="col-med-3 col-sm-3 mb-5">
        <StyledLink to={`brewery/${this.props.breweryIndex}`}>
          <Card className="card">
            <h5 className="card-header">{name}</h5> <br/>
            <img src={url} alt=""/> <br/>
            <h6 className="card-info mx-auto">{streetAddress}. <br/>
            {city}, {locationState} {zipCode} <br/> <br/> </h6>
          </Card>
        </StyledLink>
      </div>
    );
  }
};

export default BreweryCard;