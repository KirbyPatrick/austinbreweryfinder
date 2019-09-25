import React from "react";
import "../App.css";
import styled from "styled-components";

const Social = styled.div`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: scale(1.25);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Footer = () => {
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col d-flex justify-content-center border-top-5">

          <Social>
            <a href="https://github.com/KirbyPatrick" target="_blank" rel="noopener">
              <i className="fa fa-github mx-5 fa-3x"></i>
            </a>
          </Social>
          <Social>

            <a href="https://twitter.com/Kirby_Patrick" target="_blank" rel="noopener">
              <i className="fa fa-twitter mx-5 fa-3x"></i>
            </a>
          </Social>
          <Social>

            <a href="https://www.linkedin.com/in/patrick-d-kirby/" target="_blank" rel="noopener">
              <i className="fa fa-linkedin mx-5 fa-3x"></i>
            </a>
          </Social>
        </div>
      </div>
    </div>
  );
};

export default Footer;
