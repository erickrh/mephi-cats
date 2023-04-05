import React from 'react';
import './CatImage.css';

function CatImage(props) {
  return (
    <li>
      <img src={props.url} alt="Cat photo" />
      <button className='favoriteBtn'>Mark as favorite</button>
    </li>
  );
}

export { CatImage };