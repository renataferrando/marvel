import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import Drawer from '../drawer/Drawer'
import './_header.scss'

const Header = ({ comics, series }) => {
    const [height, width] = useWindowSize()
    const isMobile = width < 768
    const [comicsOpen, setComicsOpen] = useState()
    const [seriesOpen, setSeriesOpen] = useState()
    const handleClose = () => {
        setSeriesOpen(false)
        setComicsOpen(false)
    }
    const navigate = useNavigate()
    
    return (
        <div className='header'>
            <img className={!isMobile ? "logo" : "logo --mobile"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' onClick={()=> navigate("/")}/>
            <nav>
                <a className='nav-links' onClick={()=>setComicsOpen(true)} comics>COMICS</a>
                <Drawer className="list" isOpen={comicsOpen || seriesOpen} onClose={handleClose} position="left" width={!isMobile ? "desktop" : "mobile"} closeBtn={true} positionCloseRight>        
                    {comicsOpen && 
                    (<div>
                        <h4>COMICS</h4>
                        {
                        comics.map(({title, id}) => (
                            <li className='list-items' onClick={()=> navigate(`/comics/${id}`) & handleClose()} key={id} >{[title]}</li>
                        ))
                        }
                    </div>
                    )} 
                    {seriesOpen &&  
                    (<div>
                        <h4>SERIES</h4>
                        {
                        series.map(({title, id}) => (
                            <li className='list-items' onClick={()=> navigate(`/series/${id}`) & handleClose()} key={id} >{[title]}</li>
                        ))
                        }
                    </div>
                    )}
                </Drawer>        
                <a className='nav-links' onClick={()=> navigate("/")}>CHARACTERS</a>
                <a onClick={()=>setSeriesOpen(true)} className='nav-links' >SERIES</a>
            </nav>
        </div>
    );
};

export default Header;