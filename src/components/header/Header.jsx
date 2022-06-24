import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";

import "./_header.scss";

const Header = () => {
  const [height, width] = useWindowSize();
  const isMobile = width < 768;
  const [comicsOpen, setComicsOpen] = useState();
  const [seriesOpen, setSeriesOpen] = useState();

  const handleClose = () => {
    setSeriesOpen(false);
    setComicsOpen(false);
  };
  const navigate = useNavigate();
  const handleInit = () => {
    navigate("/marvel");
  };

  return (
    <div className="header">
      <img
        className={!isMobile ? "logo" : "logo --mobile"}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
        onClick={handleInit}
      />
      <nav>
        <a className="nav-links" onClick={() => setComicsOpen(true)}>
          COMICS
        </a>
        <Navigation
          isOpen={comicsOpen || seriesOpen}
          onClose={handleClose}
          comicsOpen={comicsOpen}
          seriesOpen={seriesOpen}
          width={!isMobile ? "desktop" : "mobile"}
        />
        <a className="nav-links" onClick={handleInit}>
          CHARACTERS
        </a>
        <a onClick={() => setSeriesOpen(true)} className="nav-links">
          SERIES
        </a>
        <Search />
      </nav>
    </div>
  );
};

export default Header;
