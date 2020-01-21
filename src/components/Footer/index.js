import React from 'react';
import './index.css';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='white' points='0,0 100,0 100,100' />
      </svg>
      <div className='container margin-top-footer'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-5'>
            <a href='#header'>
              <i className='fa fa-angle-double-up fa-2x arrow-scroll-up'></i>
            </a>
          </div>
          <div className='col'></div>
        </div>
        <div className='row padding-footer-row'>
          <div className='col'></div>
          <div className='col-md-5 col-sm-12 footer-text'>
            <h1>Contact</h1>
            <p>
              <b>Phone: </b> +972-54-6625292
            </p>
            <p>
              <b>Email: </b> mizrahiiomer@gmail.com
            </p>
          </div>
          <div className='col'></div>
        </div>
        <div className='row'>
          <div className='col'></div>
          <div className='col-2'>
            <a
              target='_blang'
              className='icon-social-link'
              href='https://www.facebook.com/omer.mizrahi5'
            >
              <i className='fa fa-facebook icon-social-link'></i>
            </a>
          </div>
          <div className='col-2'>
            <a
              className='icon-social-link'
              href='https://www.linkedin.com/in/omer-mizrahi-473808153/'
              target='_blang'
            >
              <i className='fa fa-linkedin icon-social-link'></i>
            </a>
          </div>
          <div className='col-2'>
            <a
              className='icon-social-link'
              href='https://github.com/mizrahiomer'
              target='_blang'
            >
              <i className='fa fa-github'></i>
            </a>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
