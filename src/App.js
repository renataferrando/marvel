import "./App.css";
import React from "react";
import AllCharacters from "./pages/AllCharacters";
import Layout from "./components/layout/Layout";
import SingleCharacter from "./pages/SingleCharacter";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiContextProvider from "./ApiContext";

function App() {
  
  return (
    <BrowserRouter>
      <ApiContextProvider>
        <Layout>
          <Routes>
            <Route exact path="/marvel" element={<AllCharacters />} />
            <Route exact path="/:id" element={<SingleCharacter />} />
            <Route exact path="/comics/:id" element={<Comics />} />
            <Route exact path="/series/:id" element={<Series />} />
          </Routes>
        </Layout>
        </ApiContextProvider>
    </BrowserRouter>
  );
}

export default App;
