import React from 'react';
import { useRef } from 'react';

function useFetchCats() {
  const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const API_URL_FAVORITE = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const isMountedRef = useRef(false);
  const [refresh, setRefresh] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [errorRandom, setErrorRandom] = React.useState(null);
  const [errorFavorite, setErrorFavorite] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isLoadedFavorites, setIsLoadedFavorites] = React.useState(false);


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


  React.useEffect(() => {
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
    console.log(favorites);

    fetchFavoriteCats();
  }, []);

  const randomCatsStates = {
    data,
    errorRandom,
    isLoaded,
    setRefresh,
  };

  const favoriteCatsStates = {
    favorites,
    isLoadedFavorites,
    errorFavorite,
  };

  return { randomCatsStates, favoriteCatsStates };
}

export { useFetchCats };