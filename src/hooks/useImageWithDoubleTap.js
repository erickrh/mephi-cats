import React from 'react';

function useImageWithDoubleTap(onDoubleTap) {
  const touchStartTimeRef = React.useRef(null);

  const handleTouchStart = () => {
    const touchStartTime = new Date().getTime();

    if (touchStartTimeRef.current !== null) {
      const timeSinceLastTouch = touchStartTime - touchStartTimeRef.current;
      if (timeSinceLastTouch < 300) {
        onDoubleTap();
        touchStartTimeRef.current = null;
        return;
      }
    }
    touchStartTimeRef.current = touchStartTime;
  };

  return handleTouchStart;
}

export { useImageWithDoubleTap };