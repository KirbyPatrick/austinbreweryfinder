import React from "react";
import '../App.css';

class BreweryCard extends React.Component {
  render() {
    return(
      <div className="col-med-3 col-sm-3 mb-5">
        <div className="card">
          <div className="card-header">
            <h5>Brewery Name</h5>
            <p>Address...</p>
            <p>Address...</p>
            <p>Address...</p>
          </div>
        </div>
      </div>
    );
  }
};

export default BreweryCard;