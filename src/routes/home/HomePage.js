import React from 'react';
import { CatImage } from '../../ui/CatImage';
import { useFetchCats } from '../../hooks/useFetchCats';
import { CatsList } from '../../ui/CatsList';
import { RefreshButton } from '../../ui/RefreshButton';
import { Error } from '../../ui/Error';
import { Loading } from '../../ui/Loading';

function HomePage() {
  const {
    randomCatsStates,
    saveFavoriteCat,
  } = useFetchCats();

  const {
    data,
    isLoaded,
    errorRandom,
    setRefresh,
  } = randomCatsStates;

  return (
    <>
      <CatsList
        title={'Random Cats'}
        data={data}
        error={errorRandom}
        isLoaded={isLoaded}
        onError={ () => <Error error={errorRandom} />}
        onLoading={() => <Loading />}
        render={cat => (
          <CatImage
            key={cat.id}
            id={cat.id}
            url={cat.url}
            buttonFavorite={true}
            onFavorite={() => saveFavoriteCat(cat.id)}
          />
        )}
      />
      
      <RefreshButton setRefresh={setRefresh} />
    </>
  );
}

export { HomePage };