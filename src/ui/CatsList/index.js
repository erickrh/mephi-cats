import React from 'react';

function CatsList(props) {
  return (
    <>
      <h2>{props.title}</h2>

      <section className={props.title}>
        <ul>
          {props.error && props.onError()}

          {(props.isLoaded && !props.error) && props.data.map(props.render)}
        </ul>
      </section>
    </>
  );
}

export { CatsList };