import React, { useState } from "react";
import "./_character-details.scss";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import ArrowLeftLine from "./ArrowLeft";

const CharacterDetails = ({
  name,
  image,
  comics,
  series,
  stories,
  className,
  description,
}) => {
  const [comicsOpen, setComicsOpen] = useState();
  const [seriesOpen, setSeriesOpen] = useState();
  const [storiesOpen, setStoriesOpen] = useState();

  return (
    <div className={className}>
      <div className="back-arrow" onClick={() => window.history.back()}>
        <ArrowLeftLine />
      </div>
      <div className="left">
        <h1>{name}</h1>
        <p>{description}</p>
        <h4>Comics</h4>
        {!comicsOpen ? (
          <ArrowDown onClick={() => setComicsOpen(+true)} />
        ) : (
          <ArrowUp onClick={() => setComicsOpen(+false)} />
        )}
        <ul className={comicsOpen && "--show"}>
          {comics.map(({ name, resourceURI }) => (
            <li key={[resourceURI]}> {[name]} </li>
          ))}
        </ul>
        <h4>Series</h4>
        {!seriesOpen ? (
          <ArrowDown onClick={() => setSeriesOpen(+true)} />
        ) : (
          <ArrowUp onClick={() => setSeriesOpen(+false)} />
        )}
        <ul className={seriesOpen && "--show"}>
          {series.map(({ name, resourceURI }) => (
            <li key={[resourceURI]}> {[name]} </li>
          ))}
        </ul>
        <h4>Stories</h4>
        {!storiesOpen ? (
          <ArrowDown onClick={() => setStoriesOpen(+true)} />
        ) : (
          <ArrowUp onClick={() => setStoriesOpen(+false)} />
        )}
        <ul className={storiesOpen && "--show"}>
          {stories.map(({ name, resourceURI }) => (
            <li key={[resourceURI]}> {[name]} </li>
          ))}
        </ul>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default CharacterDetails;
