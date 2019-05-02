import React from 'react';

const beerCard = (props) => {
  return (
    <div>
      <table class="table">

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{props.beer.name}</td>
      <td>{props.beer.style ? props.beer.style.name : 'Style not listed'}</td>
      <td>{props.beer.abv ? props.beer.abv+'%' : 'ABV not listed'}</td>
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
      {/* <table>
         <br/>
        <tr>
          <tr>Name: {props.beer.name}</tr>
          <tr>ABV: {props.beer.abv ? props.beer.abv+'%' : 'ABV not listed'}</tr>
          <tr>Style: {props.beer.style ? props.beer.style.name : 'Style not listed'}</tr>
          <br/>
       </tr>
      </table> */}
    </div>
  );
};

export default beerCard;

// {brewery.brewery.images ? brewery.brewery.images.medium : ''}