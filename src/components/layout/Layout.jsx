import React from 'react';
import Header from '../header/Header'
import './_layout.scss'

const Layout = ({ children, comics, series }) => {
    return (
    <div className="layout">
      <Header comics={comics} series={series}/>
        { children }
    </div>
    );
};

export default Layout;