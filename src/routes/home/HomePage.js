import React from 'react';
import { CatImage } from '../../ui/CatImage';
import { useFetchCats } from '../../hooks/useFetchCats';
import { CatsList } from '../../ui/CatsList';
import { RefreshButton } from '../../ui/RefreshButton';
import { Header } from '../../ui/Header';
import { Error } from '../../ui/Error';
import { DeleteAllFavoriteCatsButton } from '../../ui/DeleteAllFavoriteCatsButton';
import { Loading } from '../../ui/Loading';
import { UploadCatPhoto } from '../../ui/UploadCatPhoto';

function HomePage() {
  const {
    randomCatsStates,
    favoriteCatsStates,
    saveFavoriteCat,
    deleteFavoriteCat,
    deleteAllFavoriteCats,
    uploadCat,
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

      <UploadCatPhoto uploadCat={uploadCat} />

      <CatsList
        title={'Favorite Cats'}
        data={favorites}
        error={errorFavorite}
        isLoaded={isLoadedFavorites}
        onError={() => <Error error={errorFavorite} />}
        onLoading={() => <Loading />}
        onEmptyFavorites={() => <p>You have no favorite cats yet!</p>}
        onDeleteAllFavoriteCatsButton={() =>
          <DeleteAllFavoriteCatsButton onDeleteAll={
            () => deleteAllFavoriteCats()}
          />}
        render={cat => (
          <CatImage
            key={cat.id}
            id={cat.id}
            url={cat.image.url}
            buttonFavorite={false}
            onDelete={() => deleteFavoriteCat(cat.id)}
          />
        )}
      />
    </>
  );
}

export { HomePage };