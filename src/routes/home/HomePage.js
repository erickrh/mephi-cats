import React from 'react';
import { CatImage } from '../../ui/CatImage';
import { useFetchCats } from '../useFetchCats';
import { CatsList } from '../../ui/CatsList';
import { RefreshButton } from '../../ui/RefreshButton';
import { Header } from '../../ui/Header';
import { Error } from '../../ui/Error';
import { DeleteAllFavoriteCatsButton } from '../../ui/DeleteAllFavoriteCatsButton';

function HomePage() {
  const {
    randomCatsStates,
    favoriteCatsStates,
    saveFavoriteCat,
    deleteFavoriteCat,
    deleteAllFavoriteCats,
  } = useFetchCats();

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
          <CatImage
            key={cat.id}
            url={cat.url}
            buttonFavorite={true}
            onFavorite={() => saveFavoriteCat(cat.id)}
          />
        )}
      />

      <CatsList
        title={'Favorite Cats'}
        data={favorites}
        error={errorFavorite}
        isLoaded={isLoadedFavorites}
        onError={ () => <Error error={errorFavorite} />}
        onEmptyFavorites={() => <p>You have no favorite cats yet!</p>}
        render={cat => (
          <CatImage
            key={cat.id}
            url={cat.image.url}
            buttonFavorite={false}
            onDelete={() => deleteFavoriteCat(cat.id)}
          />
        )}
      />
      <DeleteAllFavoriteCatsButton onDeleteAll={() => deleteAllFavoriteCats()} />
    </>
  );
}

export { HomePage };