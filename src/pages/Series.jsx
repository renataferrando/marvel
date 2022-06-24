import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/comicDetails/EditionDetails";
import getSingleSerie from "../service/getSingleSerie";

const Series = () => {
  const { id } = useParams();
  const [singleSerie, setSingleSerie] = useState([]);
  useEffect(() => {
    getSingleSerie(id).then((response) => {
      setSingleSerie(response.data.results);
    });
  }, [id]);

  return (
    <div>
      {singleSerie.map((series) => (
        <SeriesDetails
          key={series.id}
          title={series.title}
          image={series.thumbnail.path + "." + series.thumbnail.extension}
          description={
            series.description !== "" || null
              ? series.description
              : "Description not available"
          }
          characters={series.characters.items}
          creators={series.creators.items}
        />
      ))}
    </div>
  );
};

export default Series;
