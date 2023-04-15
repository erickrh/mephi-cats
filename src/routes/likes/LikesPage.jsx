import React from 'react';
import { useFetchCats } from '../../hooks/useFetchCats';
import { CatsList } from '../../ui/CatsList';
import { CatImage } from '../../ui/CatImage';
import { Error } from '../../ui/Error';
import { Loading } from '../../ui/Loading';
import { DeleteAllFavoriteCatsButton } from '../../ui/DeleteAllFavoriteCatsButton';

function LikesPage() {
  const {
    favoriteCatsStates,
    deleteFavoriteCat,
    deleteAllFavoriteCats,
  } = useFetchCats();

  const {
    favorites,
    isLoadedFavorites,
    errorFavorite,
  } = favoriteCatsStates;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  handleScrollToTop();

  return (
    <>
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

      <div style={{marginBottom: '5em'}}></div>
    </>
  );
}

export { LikesPage };