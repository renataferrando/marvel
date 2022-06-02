import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSingleCharacter from "../service/getSingleCharacter";
import CharacterDetails from "../components/characterDetails/CharacterDetails";
import Loading from "../components/loading/Loading";

const SingleCharacter = () => {
  const { id } = useParams();
  const [singleCharacter, setSingleCharacter] = useState([]);
  useEffect(() => {
    getSingleCharacter(id).then((response) => {
      setSingleCharacter(response.data.results);
    });
  });

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <div className="wrapper">
        {singleCharacter.map((character) => (
          <CharacterDetails
            key={character.id}
            className="character"
            description={character.description}
            name={character.name}
            image={
              character.thumbnail.path + "." + character.thumbnail.extension
            }
            comics={character.comics.items}
            series={character.series.items}
            stories={character.stories.items}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleCharacter;
