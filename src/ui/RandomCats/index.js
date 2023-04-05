import React from 'react';
import './RandomCats.css';

function RandomCats(props) {
  return (
    <li>
      <img src={props.url} alt="Cat photo" />
      <button className='favoriteBtn'>Mark as favorite</button>
    </li>
  );
}

export { RandomCats };