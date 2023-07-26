import React from 'react';
import './CatsList.css';

function CatsList(props) {
  const newList = [];
  let listChosen = [];
  
  for (let i = 0; i < 9; i++) {
    newList.push(props.data[i]);
  }

  if (props.title === 'Random Cats') listChosen = newList;
  else listChosen = props.data;
  console.log(props.data);

  return (
    <>
      <section className={props.title}>
        <ul>
          <div className="catListGridContainer">

            {props.error && props.onError()}

            {(!props.isLoaded) && props.onLoading()}

            {(props.isLoaded && !props.error) && listChosen.map(props.render)}
          </div>
        </ul>

        {(props.isLoaded && !props.error && props.data.length <= 0 && props.title === 'Favorite Cats') && props.onEmptyFavorites()}

        {(props.isLoaded && !props.error && props.data.length > 0 && props.title === 'Favorite Cats') && props.onDeleteAllFavoriteCatsButton()}

      </section>
    </>
  );
}

export { CatsList };