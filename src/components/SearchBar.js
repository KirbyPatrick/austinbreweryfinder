import React from 'react';

class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <input type="text" placeholder="Search..."></input>
        <button>Enter</button>
      </div>
    );
  }
};

export default SearchBar;