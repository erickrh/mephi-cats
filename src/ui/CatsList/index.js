import React from 'react';
import './CatsList.css';

function CatsList(props) {
  return (
    <>
      <h2>{props.title}</h2>

      <section className={props.title}>
        <ul>
          {props.error && props.onError()}

          {(props.isLoaded && !props.error) && props.data.map(props.render)}
        </ul>
        
        {(props.isLoaded && !props.error && props.title === 'Favorite Cats') && props.onEmptyFavorites()}
      </section>
    </>
  );
}

export { CatsList };