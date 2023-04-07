import React from 'react';

function DeleteAllFavoriteCatsButton(props) {
  return (
    <button onClick={props.onDeleteAll}>Delete All Favorite Cats</button>
  );
}

export { DeleteAllFavoriteCatsButton };