import React from 'react';

function Error({ error }) {
  const errorImage = `https://http.cat/${error}`;
  
  return (
    <img src={errorImage} alt="Error as a cat image" />
  );
}

export { Error };