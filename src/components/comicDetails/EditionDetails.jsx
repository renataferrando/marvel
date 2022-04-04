import React from 'react';
import './_edition-details.scss'

const EditionDetails = ({title, image, description, characters, creators}) => {
    return (
        <div className="editions-page">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='info'>
                <img src={image} />
                <div className='bottom'>
                    <div>         
                        <h4>Characters</h4>
                        <ul>{characters.map(({name, resourceURI} ) => (<li key={[resourceURI]}> {[name]} </li>))}</ul>
                    </div> 
                    <div> 
                        <h4>Creators</h4>
                        <ul>{creators.map(({name, resourceURI} ) => (<li key={[resourceURI]}> {[name]} </li>))}</ul>
                    </div>
                </div> 
            </div>  
        </div>
    );
};

export default EditionDetails;