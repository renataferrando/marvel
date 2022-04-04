import React from 'react';
import './_character-card.scss'
const CharacterCard = ({ name, image, onClick }) => {
    return (
        <div className='character-card' onClick={onClick}>
            <img src={image} className="image" alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default CharacterCard;