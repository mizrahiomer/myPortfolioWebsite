import React from 'react';
import MyImg from '../../assets/myImg.jpg';
import './index.css';

const About = () => {
  return (
    <div id='about' className='about-wrapper'>
      <div className='container'>
        <h2 className='about-title'>About Me</h2>
        <div className='row'>
          <div className='col-12 col-md-8 about-text'>
            <p>
              My name is Omer Mizrahi and I'm a self taught frontend developer
              who specialises in mainly React. I am a recent graduate with a BSc
              in Information Systems. Love to tackle challenges and unknown
              areas and I believe that together with my multitasking
              capabilities, fast learning skills and creative mind, those will
              set me up for both company and individual success from day one.
            </p>
            <a
              target='_blang'
              className='resumeBtn'
              href='https://drive.google.com/file/d/1suE6dTKfUfyVV4ns-YqgkwTloNFzQCWo/view?usp=sharing'
            >
              View Resume
            </a>
          </div>
          <div className='col-12 col-md-4'>
            <img
              className='my-img '
              src={MyImg}
              alt='My profile img'
              width='300'
            />
          </div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='#E0F6FD' points='100 ,100 0,100 0,0' />
      </svg>
    </div>
  );
};

export default About;
