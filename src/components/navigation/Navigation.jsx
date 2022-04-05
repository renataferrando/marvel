import React from 'react';
import Drawer from '../drawer/Drawer';
import { useNavigate } from 'react-router-dom';
import './_navigation.scss'
import Loading from '../loading/Loading';

const Navigation = ({
    isOpen, 
    onClose, 
    comicsOpen, 
    seriesOpen, 
    width, 
    comicsData, 
    seriesData, 
    searchComics, 
    searchSeries,
    comicsLoading,
    
}) => {
    const navigate = useNavigate()

    
    return (
        <Drawer className="list" isOpen={isOpen} onClose={onClose} position="left" width={width} closeBtn={true} positionCloseRight>
            {comicsOpen && 
            
            (<div>
                <h4>COMICS</h4>
                {comicsLoading && <Loading/>}
                <input placeholder="Search comic" type="text" onChange={(e)=>searchComics(e.target.value)} />
                {
                comicsData.map(({title, id}) => (
                    <li className='list-items' onClick={()=> navigate(`/comics/${id}`) & onClose()} key={id} >{[title]}</li>
                ))
                }
            </div>
            )} 
            {seriesOpen &&  
            (<div>
                <h4>SERIES</h4>
                <input type="text" placeholder="Search serie" onChange={(e)=>searchSeries(e.target.value)} />
                {
                seriesData.map(({title, id}) => (
                    <li className='list-items' onClick={()=> navigate(`/series/${id}`) & onClose()} key={id} >{[title]}</li>
                ))
                }
            </div>
            )}
        </Drawer>        
    );
};

export default Navigation;