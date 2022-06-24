import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ComicDetails from "../components/comicDetails/EditionDetails";
import getSingleComic from "../service/getSingleComic";
const Comics = () => {
  const { id } = useParams();
  const [singleComic, setSingleComic] = useState([]);
  useEffect(() => {
    getSingleComic(id).then((response) => {
      setSingleComic(response.data.results);
    });
  }, [id]);

  return (
    <div>
      {singleComic.map((comic) => (
        <ComicDetails
          key={comic.id}
          title={comic.title}
          image={comic.thumbnail.path + "." + comic.thumbnail.extension}
          description={
            comic.description !== "" || null
              ? comic.description
              : "Description not available"
          }
          characters={comic.characters.items}
          creators={comic.creators.items}
        />
      ))}
    </div>
  );
};

export default Comics;
