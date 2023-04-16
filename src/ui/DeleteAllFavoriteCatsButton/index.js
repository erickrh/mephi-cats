import React from 'react';
import './DeleteAllFavoriteCatsButton.css';
import { ReactComponent as TrashIcon } from '../icons/trash.svg';

function DeleteAllFavoriteCatsButton(props) {
  return (
    <div className="deleteAllContainer">
      <button
        onClick={props.onDeleteAll}
        className='deleteAllButton'
      >
        Delete All Cats
        <div className="trashIconContainer">
          <TrashIcon className='TrashIcon' />
        </div>
      </button>
    </div>
  );
}

export { DeleteAllFavoriteCatsButton };