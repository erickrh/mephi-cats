import React from 'react';
import './CatImage.css';
import { useImageWithDoubleTap } from '../../hooks/useImageWithDoubleTap';

function CatImage(props) {
  const isMobile = ('ontouchstart' in document.documentElement);
  
  const interactionButton = () => {
    props?.buttonFavorite ? props.onFavorite() : props.onDelete();
  };
      
  const handleTouchStart = useImageWithDoubleTap(interactionButton);

  return (
    <li>
      <img
        src={props.url}
        alt="Cat photo"
        onDoubleClick={isMobile ? undefined :  interactionButton}
        onTouchStart={isMobile ? handleTouchStart : undefined }
      />
    </li>
  );
}

export { CatImage };