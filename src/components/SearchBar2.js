import React, { Component } from "react";

class SearchBar2 extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    console.log(this.state.search);
    return (
      <div className="d-flex justify-content-center">
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="Brewery Name..."
        />
      </div>
    );
  }
}

export default SearchBar2;
