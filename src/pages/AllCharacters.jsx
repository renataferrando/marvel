import React from "react";
import { useNavigate } from "react-router-dom";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import CharacterCard from "../components/characterCard/CharacterCard";
import Loading from "../components/loading/Loading";
import { useCharacters } from "../hooks/useCharacters";
import Results from "../components/results/Results";
import "./_all-characters.scss";

const AllCharacters = () => {
  const {
    characters,
    loading,
    currentPage,
    setCurrentPage,
    hasMore,
    searchParams,
  } = useCharacters();

  const navigate = useNavigate();

  const [lastElement] = useInfiniteScroll(
    hasMore,
    loading,
    currentPage,
    setCurrentPage
  );
  const search = searchParams.get("nameStartsWith");

  return (
    <>
      <div className="wrapper">
        {search !== null && <Results />}
        <div className="grid">
          {characters.map((character, i) => (
            <CharacterCard
              key={i}
              name={character.name}
              image={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              onClick={() => navigate(`/${character.id}`)}
            />
          ))}
        </div>
        {loading && <Loading />}

        <div
          style={{ minHeight: "100px" }}
          ref={lastElement}
          className="viewer"
        ></div>
      </div>
    </>
  );
};

export default AllCharacters;
