import React from 'react';
import './CatImage.css';
import { useImageWithDoubleTap } from '../../hooks/useImageWithDoubleTap';
import {  ReactComponent as HeartIcon } from './heart.svg';
import { ReactComponent as BreakHeartIcon } from './breakHeart.svg';

function CatImage(props) {
  const isMobile = ('ontouchstart' in document.documentElement);

  const animation = () => {
    const addAnimation = document.querySelector(`.icon-${props.id}`);
    addAnimation.classList.add('animateIcon');
    setTimeout(() => {
      addAnimation.classList.remove('animateIcon');
    }, 600);
  };
  
  const interactionButton = () => {
    props?.buttonFavorite ? props.onFavorite() : props.onDelete();
    animation();
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
          <HeartIcon fill='#FFB4B4' className={`heartIcon icon-${props.id}`} />
        }
        {
          !props.buttonFavorite && 
          <BreakHeartIcon fill='#FFB4B4' className={`breakHeartIcon icon-${props.id}`} />
        }
      </div>
    </li>
  );
}

export { CatImage };