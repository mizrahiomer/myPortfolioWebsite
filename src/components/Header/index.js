import React from 'react';
import './index.css';

function Header() {
  return (
    <div id='header' className='header-section'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
        <div className='header-text'>
          <h1 id='opening-text'>
            Hi, my name is{' '}
            <span className='name-text-color'> Omer Mizrahi</span>
            <br />
            I'm a Frontend Developer that specializes in React
          </h1>
          <a className='header-link' href='#about'>
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
