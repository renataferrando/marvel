import React from 'react';
import { useParams } from 'react-router-dom';
import ComicDetails from '../components/comicDetails/EditionDetails';
import useFetch from '../components/hooks/useFetch';
import Loading from '../components/loading/Loading';

const Comics = () => {

    const {id} = useParams()
    const { data: comic, isLoading } = useFetch(
      `${process.env.REACT_APP_API_URL}comics/${id}?${process.env.REACT_APP_APY_KEY}`
    );
  
    return (
        <div>
        {isLoading && <Loading/>}
        {comic.map(comic => (
            <ComicDetails
                key={comic.id}
                title={comic.title} 
                image={comic.thumbnail.path + "." + comic.thumbnail.extension}
                description={(comic.description !== "" || null) ? comic.description : "Description not available"}
                characters={comic.characters.items }
                creators={comic.creators.items}
            />
        ))}
       </div>
    );
};

export default Comics;