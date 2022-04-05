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
  const [charactersQuery, setCharactersQuery] = useState("a");
  const [comicsQuery, setComicsQuery] = useState("a");
  const [seriesQuery, setSeriesQuery] = useState("a");

  const { data: characters, isLoading: all } = useFetch(
    `${process.env.REACT_APP_API_URL}characters?nameStartsWith=${charactersQuery}${process.env.REACT_APP_APY_KEY}`
  );

  const {
    data: comics,
    isLoading: comicsLoading,
    error: comicsError,
  } = useFetch(
    `${process.env.REACT_APP_API_URL}comics?titleStartsWith=${comicsQuery}${process.env.REACT_APP_APY_KEY}`
  );
  const { data: series, isLoading: seriesLoading } = useFetch(
    `${process.env.REACT_APP_API_URL}series?titleStartsWith=${seriesQuery}${process.env.REACT_APP_APY_KEY}`
  );

  return (
    <BrowserRouter>
      <Layout
        comicsData={comics}
        seriesData={series}
        searchComics={setComicsQuery}
        searchSeries={setSeriesQuery}
        comicsLoading={comicsLoading}
      >
        <Routes>
          <Route
            exact
            path="/marvel"
            element={
              <AllCharacters
                character={characters}
                search={setCharactersQuery}
                isLoading={all}
                results={charactersQuery}
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
