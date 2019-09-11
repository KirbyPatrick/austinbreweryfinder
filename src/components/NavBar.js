import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import SearchBar2 from "./SearchBar2";

class NavBar extends React.Component {
  render() {
    return (
      <nav id="navBarColor" className="navbar navbar-expanded-md fixed-top">
        <div className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          <Link className="titleFont text-white" to="/">
            Austin Brewery Finder
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
