import React from 'react';
import { RandomCats } from '../../ui/RandomCats';
import { useFetchCats } from '../useFetchCats';
import { CatsList } from '../../ui/CatsList';
import { RefreshButton } from '../../ui/RefreshButton';
import { Header } from '../../ui/Header';
import { Error } from '../../ui/Error';

function HomePage() {
  const { randomCatsStates, favoriteCatsStates } = useFetchCats();

  const {
    data,
    isLoaded,
    errorRandom,
    setRefresh
  } = randomCatsStates;

  const {
    favorites,
    isLoadedFavorites,
    errorFavorite,
  } = favoriteCatsStates;

  return (
    <>
      <Header />

      <RefreshButton setRefresh={setRefresh} />

      <CatsList
        title={'Random Cats'}
        data={data}
        error={errorRandom}
        isLoaded={isLoaded}
        onError={ () => <Error error={errorRandom} />}
        render={cat => (
          <RandomCats
            key={cat.id}
            url={cat.url}
          />
        )}
      />

      <CatsList
        title={'Favorite Cats'}
        data={favorites}
        error={errorFavorite}
        isLoaded={isLoadedFavorites}
        onError={ () => <Error error={errorFavorite} />}
        render={cat => (
          <RandomCats
            key={cat.id}
            url={cat.url}
          />
        )}
      />
      
    </>
  );
}

export { HomePage };