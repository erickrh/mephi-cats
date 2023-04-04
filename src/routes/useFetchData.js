import React from 'react';
import { useRef } from 'react';

function useFetchData() {
  const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_j7OLb6c46CqOfAFuGCl5rLmrX9r2WItUh9pKwclJ2P32cDzQhOR6ePJ0jqneLsok';
  const isMountedRef = useRef(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    const fetchData = async () => {
      try {
        let req = await fetch(API_URL);
        let res = await req.json();
        setIsLoaded(true);
        setData(res);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoaded,
  };
}

export { useFetchData };