import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from '../components/characterCard/CharacterCard'
import Loading from '../components/loading/Loading'
import './_all-characters.scss'


const AllCharacters = ({ character, search, isLoading, results }) => {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const onSearch = (q) => {
        setText(q)
        search(q)
    }
    
    return (
        <>
        <input className='search-bar' type="text" placeholder='Search character' onChange={(e)=>onSearch(e.target.value)} value={text}/>
        {results&&<p className='search-results'>Search results for "{results}" <br/><span onClick={()=>window.location.reload()}>clean up filter</span></p>}
        <div className='wrapper'>
        {isLoading && <Loading/>}     
            <div className='grid'>
                {character.map(character => (
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