import React, { useContext, useState } from "react";
import CharactersContext from "../../context/CharactersContext";
import Icon from "./Icon";
import "./_search.scss";

const Search = () => {
  const { searchParams, setSearchParams } = useContext(CharactersContext);
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    if (searchText === "") {
      return;
    }
    e.preventDefault();
    searchParams.set("nameStartsWith", searchText);
    setSearchParams(searchParams);
  };

  return (
    <form className="search" onSubmit={handleSubmit} action="">
      <div className="input">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <div className="icon" onClick={handleSubmit}>
          <Icon />
        </div>
      </div>
    </form>
  );
};

export default Search;
