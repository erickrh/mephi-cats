import React from 'react';
import axios from 'axios';
import { useRef } from 'react';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {'x-api-key': 'live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok'}
});

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
    setIsLoadedFavorites,
  };
}

const handleSaveFavoriteCat = (API_URL_FAVORITE, setRefreshFavorites) => {
  const newFavourite = async id => {
    // const res = await fetch(API_URL_FAVORITE, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     image_id: id
    //   }),
    // });
    // const data = await res.json();
    // console.log(data);

    const {data, status} = await api.post('/favourites', {
      image_id: id,
    });

    console.log(data);
    console.log(status);

    setRefreshFavorites(prevState => !prevState);
  };
  return newFavourite;
};

const handleDeleteFavoriteCat = (API_URL_DELETE, API_KEY, setRefreshFavorites) => {
  const deleteFavoriteCat = async id => {
    const res = await fetch(API_URL_DELETE + id, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json',
        'x-api-key': API_KEY,
      }
    });
    console.log(res);
    setRefreshFavorites(prevState => !prevState);
  };
  return deleteFavoriteCat;
};

const handleDeleteAllFavoriteCats = (
  API_KEY,
  API_URL_DELETE,
  favorites,
  setRefreshFavorites,
  setIsLoadedFavorites,
) => {

  const deleteAll = async () => {
    try {
      setIsLoadedFavorites(false);
      for (const favorite of favorites) {
        await fetch(API_URL_DELETE + favorite.id, {
          method: 'DELETE',
          headers: {
            'content-type':'application/json',
            'x-api-key': API_KEY,
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

const handleUploadCat = async (API_URL_UPLOAD, API_KEY, saveFavoriteCat) => {
  const uploadingForm = document.querySelector('.uploadingForm');
  const formData = new FormData(uploadingForm);
  const res = await fetch(API_URL_UPLOAD, {
    method: 'POST',
    headers: {
      // 'Content-Type': 'multipart/form-data',
      'x-api-key': API_KEY,
    },
    body: formData,
  });
  const data = await res.json();
  console.log(data);

  saveFavoriteCat(data.id);
};


function useFetchCats() {
  const API_KEY = 'live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const API_URL_FAVORITE = 'https://api.thecatapi.com/v1/favourites?limit=100&api_key=live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const API_URL_DELETE = 'https://api.thecatapi.com/v1/favourites/';
  const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';

  const randomCatsStates = useFetchRandomCats(API_URL_RANDOM);

  const favoriteCatsStates = useFetchFavoriteCats(API_URL_FAVORITE);
  
  const {
    favorites,
    setRefreshFavorites,
    setIsLoadedFavorites,
  } = favoriteCatsStates;

  const saveFavoriteCat = handleSaveFavoriteCat(API_URL_FAVORITE, setRefreshFavorites);
  
  const deleteFavoriteCat = handleDeleteFavoriteCat(API_URL_DELETE, API_KEY, setRefreshFavorites);

  const deleteAllFavoriteCats = handleDeleteAllFavoriteCats(
    API_KEY,
    API_URL_DELETE,
    favorites,
    setRefreshFavorites,
    setIsLoadedFavorites,
  );

  const uploadCat = async () => {
    await handleUploadCat(API_URL_UPLOAD, API_KEY, saveFavoriteCat);
  };

  return {
    randomCatsStates,
    favoriteCatsStates,
    saveFavoriteCat,
    deleteFavoriteCat,
    deleteAllFavoriteCats,
    uploadCat,
  };
}

export { useFetchCats };