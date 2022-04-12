import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../ApiContext';
import CharacterCard from '../components/characterCard/CharacterCard'
import Loading from '../components/loading/Loading'
import './_all-characters.scss'


const AllCharacters = () => {
    const navigate = useNavigate();
    const { characters, charactersLoading, setCharactersQuery, charactersQuery, } = useContext(ApiContext)

    return (
        <>
        <input 
            className='search-bar' 
            type="text" 
            placeholder='Search character' 
            onChange={(e)=>setCharactersQuery(e.target.value)} 
        />
        {charactersQuery !== "a" && 
            <p className='search-results'>Search results for "{charactersQuery}" <br/>
                <span onClick={()=>setCharactersQuery("a")} >clean up filter</span>
            </p>}
        <div className='wrapper'>
            {charactersLoading && <Loading/>}     
                <div className='grid'>
                    {characters.map(character => (
                        <CharacterCard 
                            key={character.id} 
                            name={character.name} 
                            image={character.thumbnail.path + "." + character.thumbnail.extension}
                            onClick={()=> navigate(`/${character.id}`)}
                        />
                    ))}
                </div>
        </div>
        </>
    );
};

export default AllCharacters;