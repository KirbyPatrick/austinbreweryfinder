import React from 'react';

const beerCard = (props) => {
  return (
  <React.Fragment>
    <div>
      <table class="table">
        <tbody>
          <tr>
            {/* <th scope="row">1</th> */}
            <td>{props.beer.name}</td>
            <td>{props.beer.style ? props.beer.style.name : 'Style not listed'}</td>
            <td>{props.beer.abv ? props.beer.abv+'%' : 'ABV not listed'}</td>
          </tr>
        </tbody>
      </table>
    </div>
          
        </React.Fragment>
        );
      };

export default beerCard;

// {brewery.brewery.images ? brewery.brewery.images.medium : ''}