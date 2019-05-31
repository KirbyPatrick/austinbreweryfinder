import React from "react";

const beerCard = props => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.beer.name}</td>
        <td>{props.beer.style ? props.beer.style.name : "Style not listed"}</td>
        <td>{props.beer.abv ? props.beer.abv + "%" : "ABV not listed"}</td>
      </tr>
    </React.Fragment>
  );
};

export default beerCard;
