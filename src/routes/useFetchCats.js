import React from 'react';
import { useRef } from 'react';

function useFetchRandomCats(API_URL_RANDOM) {
  const isMountedRef = useRef(false);
  const [refresh, setRefresh] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [errorRandom, setErrorRandom] = React.useState(null);

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    const fetchRandomCats = async () => {
      try {
        let req = await fetch(API_URL_RANDOM);
        let res = await req.json();
        setIsLoaded(true);
        setData(res);
      } catch (error) {
        setIsLoaded(true);
        setErrorRandom(error);
      }
    };
    fetchRandomCats();
  }, [refresh]);

  return {
    data,
    errorRandom,
    isLoaded,
    setRefresh,
  };
}

function useFetchFavoriteCats(API_URL_FAVORITE) {
  const isMountedRef = useRef(false);
  const [favorites, setFavorites] = React.useState([]);
  const [errorFavorite, setErrorFavorite] = React.useState(null);
  const [refreshFavorites, setRefreshFavorites] = React.useState(false);
  const [isLoadedFavorites, setIsLoadedFavorites] = React.useState(false);

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    const fetchFavoriteCats = async () => {
      try {
        let req = await fetch(API_URL_FAVORITE);
        let res = await req.json();
        setIsLoadedFavorites(true);
        setFavorites(res);
      } catch (error) {
        setIsLoadedFavorites(true);
        setErrorFavorite(error);
      }
    };
    fetchFavoriteCats();
  }, [refreshFavorites]);

  return {
    favorites,
    isLoadedFavorites,
    errorFavorite,
    setRefreshFavorites,
  };
}

const handleSaveFavoriteCat = (API_URL_FAVORITE, setRefreshFavorites) => {
  const newFavourite = async id => {
    const res = await fetch(API_URL_FAVORITE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_id: id
      }),
    });
    const data = await res.json();
    console.log(data);
    setRefreshFavorites(prevState => !prevState);
  };
  return newFavourite;
};

const handleDeleteFavoriteCat = (API_URL_DELETE, setRefreshFavorites) => {
  const deleteFavoriteCat = async id => {
    await fetch(API_URL_DELETE + id, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json',
        'x-api-key': 'live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok'
      }
    });
    setRefreshFavorites(prevState => !prevState);
  };
  return deleteFavoriteCat;
};

const handleDeleteAllFavoriteCats = (
  API_KEY,
  API_URL_DELETE,
  favorites,
  setRefreshFavorites,
) => {

  const deleteAll = async () => {
    try {
      for (const favorite of favorites) {
        await fetch(API_URL_DELETE + favorite.id, {
          method: 'DELETE',
          headers: {
            'content-type':'application/json',
            'x-api-key': `${API_KEY}`,
          }
        });
      }
      setRefreshFavorites(prevState => !prevState);
    } catch (error) {
      console.log(`Error when deleting cats in favorites: ${error}`);
    }
  };
  return deleteAll;
};


function useFetchCats() {
  const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const API_URL_FAVORITE = 'https://api.thecatapi.com/v1/favourites?limit=100&api_key=live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const API_URL_DELETE = 'https://api.thecatapi.com/v1/favourites/';
  const API_KEY = 'live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';

  const randomCatsStates = useFetchRandomCats(API_URL_RANDOM);

  const favoriteCatsStates = useFetchFavoriteCats(API_URL_FAVORITE);

  const saveFavoriteCat = handleSaveFavoriteCat(API_URL_FAVORITE, favoriteCatsStates.setRefreshFavorites);
  
  const deleteFavoriteCat = handleDeleteFavoriteCat(API_URL_DELETE, favoriteCatsStates.setRefreshFavorites);

  const deleteAllFavoriteCats = handleDeleteAllFavoriteCats(
    API_KEY,
    API_URL_DELETE,
    favoriteCatsStates.favorites,
    favoriteCatsStates.setRefreshFavorites,
  );

  return {
    randomCatsStates,
    favoriteCatsStates,
    saveFavoriteCat,
    deleteFavoriteCat,
    deleteAllFavoriteCats,
  };
}

export { useFetchCats };