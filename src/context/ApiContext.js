import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
const Context = React.createContext({});

export function ApiContextProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [series, setSeries] = useState([]);
  const [comics, setComics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [seriesQuery, setSeriesQuery] = useState("");
  const [comicsQuery, setComicsQuery] = useState("");

  return (
    <Context.Provider
      value={{
        characters,
        series,
        setCharacters,
        setSeries,
        searchParams,
        setSearchParams,
        seriesQuery,
        setSeriesQuery,
        comics,
        setComics,
        comicsQuery,
        setComicsQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
