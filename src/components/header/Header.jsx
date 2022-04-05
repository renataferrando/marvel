import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import Navigation from '../navigation/Navigation';
import './_header.scss'

const Header = ({ comicsData, seriesData, searchComics, searchSeries, comicsLoading }) => {
    const [height, width] = useWindowSize()
    const isMobile = width < 768
    const [comicsOpen, setComicsOpen] = useState()
    const [seriesOpen, setSeriesOpen] = useState()
    const handleClose = () => {
        setSeriesOpen(false)
        setComicsOpen(false)
        searchComics("a")
        searchSeries("a")
    }
    const navigate = useNavigate()
    
    return (
        <div className='header'>
            <img className={!isMobile ? "logo" : "logo --mobile"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' onClick={()=> navigate("/marvel")}/>
            <nav>
                <a className='nav-links' onClick={()=>setComicsOpen(true)} comics>COMICS</a>
                <Navigation
                    isOpen={comicsOpen || seriesOpen}
                    onClose={handleClose}
                    comicsOpen={comicsOpen}
                    seriesOpen={seriesOpen}
                    width={!isMobile ? "desktop" : "mobile"}
                    comicsData={comicsData}
                    seriesData={seriesData}
                    searchComics={searchComics}
                    searchSeries={searchSeries}
                    comicsLoading={comicsLoading}
                />
                <a className='nav-links' onClick={()=> navigate("/marvel")}>CHARACTERS</a>
                <a onClick={()=>setSeriesOpen(true)} className='nav-links' >SERIES</a>
            </nav>
        </div>
    );
};

export default Header;