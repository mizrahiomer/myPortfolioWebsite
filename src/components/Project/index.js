import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import ClipLoader from 'react-spinners/ClipLoader';
import './index.css';

const Project = ({ title, desc, website, source, img, cred }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className='row my-5 px-3'>
      <div className='col-lg-6 col-sm-12'>
        <Fade left>
          <h3 className='project-title'>{title}</h3>
          <div>
            <p className='project-text'>
              {desc}
              <br />
              {cred}
            </p>

            <a href={website} target='_blang' className='websiteBtn'>
              View Website
            </a>
            <a href={source} target='_blang' className='websiteBtn'>
              Source Code
            </a>
          </div>
        </Fade>
      </div>
      <div className='col-lg-6 col-sm-12'>
        {loading ? <ClipLoader /> : null}
        <Fade right>
          <img
            src={img}
            alt='img'
            onLoad={() => {
              setLoading(false);
            }}
            className='project-img'
          />
        </Fade>
      </div>
    </div>
  );
};
export default Project;