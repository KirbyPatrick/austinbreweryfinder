import React, { Component } from "react";

class GoogleMap extends Component {
  state = {
    opened: "Yes (test)",
    hours: "9-5 (test)",
    address: "102 Riverside Dr, Austin TX. 78745"
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 boxy text-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Placeholder for Google Maps API integration"
            />
          </div>
          <div className="col-md-6 boxy">
            <ul>
              <li>
                Now Open: <span>{this.state.opened}</span>
              </li>
              <li>Hours Of Opperation: {this.state.hours}</li>
              <li>Address: {this.state.address}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleMap;
