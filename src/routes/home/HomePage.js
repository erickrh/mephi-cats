import React from 'react';
import { RandomCats } from '../../ui/RandomCats';
import { FavoriteCats } from '../../ui/FavoriteCats';
import { useFetchData } from '../useFetchData';
import { RandomCatsList } from '../../ui/RandomCatsList';

function HomePage() {
  const { data, isLoaded } = useFetchData();

  return (
    <>
      <RandomCatsList
        data={data}
        isLoaded={isLoaded}
        render={cat => (
          <RandomCats
            key={cat.id}
            url={cat.url}
          />
        )}
      />
      
      <FavoriteCats />
    </>
  );
}

export { HomePage };