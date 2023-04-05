import React from 'react';

function RandomCatsList(props) {
  return (
    <>
      <h2>Random cats</h2>

      <section id='randomCats'>
        <ul>
          {props.isLoaded && props.data.map(props.render)}
        </ul>
      </section>
    </>
  );
}

export { RandomCatsList };