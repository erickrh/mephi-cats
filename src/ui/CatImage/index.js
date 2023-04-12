import React from 'react';
import './CatImage.css';

function CatImage(props) {
  const interactionButton = () => {
    // if (props.buttonFavorite) {
    //   props.onFavorite();
    // } else {
    //   props.onDelete();
    // }
    console.log('like');
    // props?.buttonFavorite() ?? props.onDelete();
  };

  return (
    <li>
      <img
        src={props.url}
        alt="Cat photo"
        onDoubleClick={interactionButton}
      />

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