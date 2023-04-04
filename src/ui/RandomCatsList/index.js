import React from 'react';

function RandomCatsList(props) {
  return (
    <>
      <h1>Random cats</h1>

      <section id='randomCats'>
        <ul>
          {props.isLoaded && props.data.map(props.render)}
        </ul>
      </section>
    </>
  );
}

export { RandomCatsList };