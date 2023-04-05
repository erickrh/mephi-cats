import React from 'react';
import { RandomCats } from '../../ui/RandomCats';
import { FavoriteCats } from '../../ui/FavoriteCats';
import { useFetchData } from '../useFetchData';
import { RandomCatsList } from '../../ui/RandomCatsList';
import { RefreshButton } from '../../ui/RefreshButton';
import { Header } from '../../ui/Header';

function HomePage() {
  const { data, isLoaded, setRefresh } = useFetchData();

  return (
    <>
      <Header />

      <RefreshButton setRefresh={setRefresh} />

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