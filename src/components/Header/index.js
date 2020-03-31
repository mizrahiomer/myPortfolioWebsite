import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div id='header' className='header-section'>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className='header-title'>
        <div className='header-text'>
          <h1 className='opening-text'>
            Hi, my name is
            <span className='name-text-color'> Omer Mizrahi</span>
            <br />
            I'm a frontend developer who specializes in React
          </h1>
          <a className='headerBtn' href='#about'>
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
