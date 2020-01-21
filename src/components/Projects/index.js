import React from 'react';
import Fade from 'react-reveal/Fade';
import TodoList from '../../assets/todolist.png';
import Saida from '../../assets/saida.png';
import Tilt from 'react-tilt';
import './index.css';

function Projects() {
  return (
    <div id='projects'>
      <div className='container-fluid'>
        <h2 className='projects-section-title'>Projects</h2>
        <div className='row margin-bottom-30'>
          <div className='col'></div>
          <div className='col-lg-4 col-sm-12'>
            <Fade left>
              <div className='project-wrapper__text'>
                <h3 className='project-wrapper-text-title'>Todo list</h3>
                <div>
                  <p className='mb-4 project-text'>
                    A simple todo list app built using React and Redux, this web
                    app allows to create a list of to-dos with custom
                    categories. The app is adapted for large screen size as well
                    as for mobile screen size.
                    <br></br>The to-dos are saved to local storage. You can
                    leave the site at anytime, then back in and your to-dos will
                    still be there!
                  </p>
                  <p className='p-text-left'>
                    <a
                      href='https://mizrahiomer.github.io/todolist/'
                      target='_blang'
                      className='cta-btn--website'
                    >
                      View Website
                    </a>
                    <a
                      href='https://github.com/mizrahiomer/todolist'
                      target='_blang'
                      className='cta-btn--website'
                    >
                      Source Code
                    </a>
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-lg-7 col-sm-12'>
            <Fade right>
              <Tilt className='Tilt' options={{ max: 25 }}>
                <div className='Tilt-inner gif-wrapper'>
                  <img src={TodoList} alt='todolist' className='project-gif' />
                </div>
              </Tilt>
            </Fade>
          </div>
        </div>
        <div className='row margin-bottom-30'>
          <div className='col'></div>
          <div className='col-lg-4 col-sm-12'>
            <Fade left>
              <div className='project-wrapper__text'>
                <h3 className='project-wrapper-text-title'>
                  Saida - BackOffice
                </h3>
                <div>
                  <p className='mb-4 project-text'>
                    An employee management system built as part of a workshop.
                    The system helps managers and employees control key work
                    processes efficiently and improve communication and
                    documentation among employees. In addition, the system is
                    interfacing with the Google Calendar and Google Maps API to
                    improve daily routine processes.
                    <br />
                    <br />
                    In order to connect please enter the following credentials:
                    <br />
                    <b>Admin:</b>
                    <br />
                    username: omer@omer.com
                    <br />
                    password: 111111113
                    <br />
                    <b>User:</b>
                    <br />
                    username : chen@chen.com
                    <br />
                    password: 111111119
                  </p>
                  <p className='p-text-left'>
                    <a
                      href='https://maorke.mtacloud.co.il/saida/'
                      target='_blang'
                      className='cta-btn--website'
                    >
                      View Website
                    </a>
                    <a
                      href='https://github.com/mizrahiomer/saida'
                      target='_blang'
                      className='cta-btn--website'
                    >
                      Source Code
                    </a>
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-lg-7 col-sm-12'>
            <Fade right>
              <Tilt className='Tilt' options={{ max: 25 }}>
                <div className='Tilt-inner gif-wrapper'>
                  <img src={Saida} alt='saida' className='project-gif' />
                </div>
              </Tilt>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
