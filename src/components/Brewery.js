import React, { Component } from 'react';
import axios from 'axios';

class Brewery extends Component {
  state = {
    name: '',
    breweryIndex: '',
    imageUrl: '',

  }

  async componentDidMount() {
    const {breweryIndex} = this.props.match.params;

    //Urls for brewery info
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Brewery;