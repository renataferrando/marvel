import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../components/characterDetails/CharacterDetails';
import Loading from '../components/loading/Loading';
import useFetch
 from '../components/hooks/useFetch';
const SingleCharacter = () => {

    const {id} = useParams()
    const { data: character, isLoading } = useFetch(
      `/characters/${id}?${process.env.REACT_APP_APY_KEY}`
    );

    return (
      <div>
        {isLoading && <Loading/>}
          <div className='wrapper'>
          {
          character.map(character  => (
              <CharacterDetails 
              key={character.id}
              className="character"
              description={character.description}
              name={character.name} 
              image={character.thumbnail.path + "." + character.thumbnail.extension}
              comics={character.comics.items} 
              series={character.series.items} 
              stories={character.stories.items}
              />
          ))
          }
          </div>
        </div>
    );
};

export default SingleCharacter;