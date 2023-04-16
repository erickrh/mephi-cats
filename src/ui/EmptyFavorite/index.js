import React from 'react';
import './EmptyFavorite.css';
import { ReactComponent as Mooncat } from '../icons/mooncat.svg';

function EmptyFavorite() {
  return (
    <>
      <div className="emptyContainer">
        <p>You don&apos;t have favorite cats yet!</p>
        <div className="MooncatContainer">
          <Mooncat className="Mooncat" />
        </div>
      </div>
    </>
  );
}

export { EmptyFavorite };