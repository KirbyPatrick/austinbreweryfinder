import React from "react";
import "../App.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav
        id="austinFC"
        className="navbar navbar-expanded-md fixed-top text-white"
      >
        <div className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Austin Brewery Finder
        </div>
      </nav>
    );
  }
}

export default NavBar;
