import React from 'react';
import Header from '../header/Header'
import './_layout.scss'

const Layout = ({ children, comicsData, seriesData, searchComics, searchSeries, comicsLoading, seriesLoading }) => {
    return (
    <div className="layout">
      <Header 
        comicsData={comicsData} 
        seriesData={seriesData} 
        searchComics={searchComics} 
        searchSeries={searchSeries} 
        comicsLoading={comicsLoading}
        seriesLoading={seriesLoading}
      />
        { children }
    </div>
    );
};

export default Layout;