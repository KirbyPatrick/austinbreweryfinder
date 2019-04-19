import React from "react";
import styled from 'styled-components';


class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expanded-md fixed-top text-white" style={{
        backgroundColor: "#00B33E"
      }}>
        <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          Austin Brewery Finder
        </a>
      </nav>
    );
  }
};

export default NavBar;