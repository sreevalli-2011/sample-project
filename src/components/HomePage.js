// components/HomePage.js
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavComponent from '../NavComponent'
import bannerImage from '../assets/images/banner.jpg'; 





function HomePage() {
  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h1 className='banner-text'>
          This is where code meets
          <span className='fade-in-out'> Creativity in center</span>
        </h1>
      </div>
    </div>
  );
}


export default HomePage