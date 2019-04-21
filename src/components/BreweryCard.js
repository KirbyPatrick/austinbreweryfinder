import React from "react";
import '../App.css';

class BreweryCard extends React.Component {
  state ={
    name: '',
    imageUrl: '',
    breweryIndex: ''
  }

  render() {

    const {name, url} = this.props;

    return(
      <div className="col-med-3 col-sm-3 mb-5">
        <div className="card">
          <div className="card-header">
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    );
  }
};

export default BreweryCard;