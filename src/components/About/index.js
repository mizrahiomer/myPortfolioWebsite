import React from 'react';
import MyImg from '../../assets/myImg.jpg';
import './index.css';

function About() {
  return (
    <div id='about' className='about-wrapper'>
      <div className='container'>
        <h2 className='about-section-title'>About Me</h2>
        <div className='row'>
          <div className='col-12 col-md-7 about-text'>
            <p>
              Hi, my name is Omer Mizrahi, and I'm self thought JavaScript
              developer.
            </p>
            <p>
              I have a BSc in Information Systems and specialize mainly in
              React. love to tackle challenges and unknown areas and I believe
              that my fast learning capabilities, creativity and the ability to
              manage multiple projects at a time will set me up for both
              individual success and corporate productivity from day one.
            </p>
            <a
              target='_blang'
              className='cta-btn cta-btn--resume'
              href='https://drive.google.com/file/d/1y5fpdAroCkYx__S0HuiHSiNa_BRgJz-C/view?usp=sharing'
            >
              View Resume
            </a>
          </div>
          <div className='col-12 col-md-5'>
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
      ></svg>
    </div>
  );
}

export default About;
