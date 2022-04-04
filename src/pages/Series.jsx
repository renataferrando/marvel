import React from 'react';
import { useParams } from 'react-router-dom';
import ComicDetails from '../components/comicDetails/EditionDetails';
import useFetch from '../components/hooks/useFetch';
import Loading from '../components/loading/Loading';

const Series = () => {
    const {id} = useParams()
    const { data: series, isLoading } = useFetch(
      `${process.env.REACT_APP_API_URL}series/${id}?${process.env.REACT_APP_APY_KEY}`
    );

    return (
        <div>
        {isLoading && <Loading/>}
        {series.map(series => (
            <ComicDetails
                key={series.id}
                title={series.title} 
                image={series.thumbnail.path + "." + series.thumbnail.extension}
                description={(series.description !== "" || null) ? series.description : "Description not available"}
                characters={series.characters.items }
                creators={series.creators.items}
            />
        ))}
       </div>
    );
};

export default Series;