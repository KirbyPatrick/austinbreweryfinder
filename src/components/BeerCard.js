import React from 'react';

const beerCard = (props) => {
  return (
    <div>
      <table>
         <br/>
        <tr>Name: {props.beer.name}</tr>
        <tr>ABV: {props.beer.abv ? props.beer.abv+'%' : 'ABV not listed'}</tr>
        <tr>Style: {props.beer.style ? props.beer.style.name : 'Style not listed'}</tr>
        <br/>
      </table>
    </div>
  );
};

export default beerCard;

// {brewery.brewery.images ? brewery.brewery.images.medium : ''}