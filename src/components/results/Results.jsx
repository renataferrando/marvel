import React, { useContext } from "react";
import CharactersContext from "../../context/CharactersContext";
import "./_results.scss";

const Results = () => {
  const { searchParams } = useContext(CharactersContext);
  const query = searchParams.get("nameStartsWith");
  return (
    <div className="results">
      <span>Results for:</span> <span className="query">{query}</span>
    </div>
  );
};

export default Results;
