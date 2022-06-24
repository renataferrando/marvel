import getComics from "../service/getComics";
import { useEffect, useContext, useState } from "react";
import ApiContext from "../context/ApiContext";

export function useComics() {
  const { comics, setComics, comicsQuery, setComicsQuery } =
    useContext(ApiContext);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 20;
  let offset = currentPage * limit;

  useEffect(() => {
    setLoading(true);
    getComics(limit, offset, comicsQuery).then((response) => {
      if (currentPage === 0) {
        setComics(response.data.results);
      } else {
        setComics((prev) => [...prev, ...response.data.results]);
      }
      setHasMore(true);
      if (response.data.results.length === 0) {
        setHasMore(false);
      }
      setLoading(false);
    });
  }, [offset, comicsQuery]);

  useEffect(() => {
    setComics([]);
    setCurrentPage(0);
  }, [comicsQuery]);

  return {
    comics,
    setComics,
    comicsQuery,
    setComicsQuery,
    loading,
    setLoading,
    setCurrentPage,
    currentPage,
    hasMore,
  };
}
