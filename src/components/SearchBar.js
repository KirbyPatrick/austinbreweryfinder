import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getBrewery}>
        <input type="text" name="brewery" placeholder="Brewery Name..." />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
