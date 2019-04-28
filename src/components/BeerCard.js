import React from 'react';

const beerCard = (props) => {
  return (
    <div>
      <h1>{props.beer.name}</h1>
    </div>
  );
};

export default beerCard;