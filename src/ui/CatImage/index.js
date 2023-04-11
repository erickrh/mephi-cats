import React from 'react';
import './CatImage.css';

function CatImage(props) {
  return (
    <li>
      <img src={props.url} alt="Cat photo" />

      {/* {props.buttonFavorite && (
        <button 
          onClick={props.onFavorite}
          className='favoriteBtn'>
          Mark as favorite
        </button>
      )} */}

      {/* {!props.buttonFavorite && (
        <button
          className='deleteBtn'
          id='deleteBtn'
          onClick={props.onDelete}
        >
          Delete favorite
        </button>
      )} */}
    </li>
  );
}

export { CatImage };