import "./App.css";
import React, { useState } from "react";
import AllCharacters from "./pages/AllCharacters";
import Layout from "./components/layout/Layout";
import SingleCharacter from "./pages/SingleCharacter";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from "./components/hooks/useFetch";

function App() {
  const [query, setQuery] = useState();

  const { data: characters, isLoading: all } = useFetch(
    `https://gateway.marvel.com:443/v1/public/characters?${process.env.REACT_APP_APY_KEY}`
  );

  const {
    data: filterCharacters,
    isLoading: filtered,
    abortControllerSignal,
  } = useFetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}${process.env.REACT_APP_APY_KEY}`
  );
  const { data: comics } = useFetch(`/comics?${process.env.REACT_APP_APY_KEY}`);
  const { data: series } = useFetch(`/series?${process.env.REACT_APP_APY_KEY}`);

  return (
    <BrowserRouter>
      <Layout comics={comics} series={series}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AllCharacters
                character={!query ? characters : filterCharacters}
                search={(q) => setQuery(q)}
                isLoading={!query ? all : filtered}
                results={query}
                onClick={() => abortControllerSignal()}
              />
            }
          />
          <Route exact path="/:id" element={<SingleCharacter />} />
          <Route exact path="/comics/:id" element={<Comics />} />
          <Route exact path="/series/:id" element={<Series />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
