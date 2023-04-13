import React from 'react';
import './CatImage.css';
import { useImageWithDoubleTap } from '../../hooks/useImageWithDoubleTap';
import {  ReactComponent as HeartIcon } from './heart.svg';
import { ReactComponent as BreakHeartIcon } from './breakHeart.svg';

function CatImage(props) {
  const isMobile = ('ontouchstart' in document.documentElement);
  
  // const animation = (e) => {
  // console.log(e.target.value);
  // let icon;
  // if (props?.buttonFavorite) {
  //   icon = document.querySelector('.HeartIcon');
  //   icon.classList.add('animateIcon');
  // } else {
  //   icon = document.querySelector('.breakHeartIcon');
  //   icon.classList.add('animateIcon');
  // }
  // };

  
  const interactionButton = () => {
    props?.buttonFavorite ? props.onFavorite() : props.onDelete();
  };

  const handleTouchStart = useImageWithDoubleTap(interactionButton);

  return (
    <li>
      <img
        src={props.url}
        alt="Cat photo"
        onDoubleClick={isMobile ? undefined : interactionButton}
        onTouchStart={isMobile ? handleTouchStart : undefined }
      />
      <div className="heartIconContainer">
        {props.buttonFavorite && 
          <HeartIcon fill='#FFB4B4' className='heartIcon' />
        }
        {
          !props.buttonFavorite && 
          <BreakHeartIcon fill='#FFB4B4' className='breakHeartIcon' />
        }
      </div>
    </li>
  );
}

export { CatImage };