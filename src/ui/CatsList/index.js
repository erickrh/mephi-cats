import React from 'react';
import './CatsList.css';

function CatsList(props) {
  return (
    <>
      <section className={props.title}>
        <ul>
          {props.error && props.onError()}

          {(!props.isLoaded) && props.onLoading()}

          {(props.isLoaded && !props.error) && props.data.map(props.render)}
        </ul>

        {(props.isLoaded && !props.error && props.data.length <= 0 && props.title === 'Favorite Cats') && props.onEmptyFavorites()}

        {(props.isLoaded && !props.error && props.data.length > 0 && props.title === 'Favorite Cats') && props.onDeleteAllFavoriteCatsButton()}

      </section>
    </>
  );
}

export { CatsList };