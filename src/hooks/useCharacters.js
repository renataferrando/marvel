import getCharacters from "../service/getCharacters";
import { useEffect, useContext, useState } from "react";
import CharactersContext from "../context/CharactersContext";

export function useCharacters() {
  const { characters, setCharacters, searchParams, setSearchParams } =
    useContext(CharactersContext);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 20;
  let offset = currentPage * limit;

  useEffect(() => {
    setLoading(true);
    getCharacters(limit, offset, searchParams).then((response) => {
      if (currentPage === 0) {
        setCharacters(response.data.results);
      } else {
        setCharacters((prev) => [...prev, ...response.data.results]);
      }

      setHasMore(true);

      if (response.data.results.length === 0) {
        setHasMore(false);
      }
      setLoading(false);
    });
  }, [offset, searchParams]);

  useEffect(() => {
    setCharacters([]);
    setCurrentPage(0);
  }, [searchParams]);

  return {
    characters,
    setCharacters,
    loading,
    setLoading,
    setCurrentPage,
    currentPage,
    hasMore,
    searchParams,
    setSearchParams,
  };
}
