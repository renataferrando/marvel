import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal,
        });
        const {
          data: { results },
        } = await response?.json();
        setData(results);

        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
