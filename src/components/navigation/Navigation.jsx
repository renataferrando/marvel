import React from 'react';
import Drawer from '../drawer/Drawer';
import { useNavigate } from 'react-router-dom';
import './_navigation.scss'

const Navigation = ({isOpen, onClose, className, comicsOpen, seriesOpen, width, comics, series}) => {
    const navigate = useNavigate()
    return (
        <Drawer className={className} isOpen={isOpen} onClose={onClose} position="left" width={width} closeBtn={true} positionCloseRight>
           
            {comicsOpen && 
            (<div>
                <h4>COMICS</h4>
                {
                comics.map(({title, id}) => (
                    <li className='list-items' onClick={()=> navigate(`/comics/${id}`) & onClose()} key={id} >{[title]}</li>
                ))
                }
            </div>
            )} 
            {seriesOpen &&  
            (<div>
                <h4>SERIES</h4>
                {
                series.map(({title, id}) => (
                    <li className='list-items' onClick={()=> navigate(`/series/${id}`) & onClose()} key={id} >{[title]}</li>
                ))
                }
            </div>
            )}
        </Drawer>        
    );
};

export default Navigation;