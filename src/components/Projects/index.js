import React from 'react';
import Project from '../Project';
import TodoList from '../../assets/todolist.gif';
import Tictactoe from '../../assets/tictactoe.gif';
import Saida from '../../assets/saida.gif';
import nba from '../../assets/nba.gif';
import './index.css';

const Projects = () => {
  const todolistDesc =
    'A simple todo list app built using React and Redux, this web app allows to create a list of tasks with custom categories. The app is adapted for large screen size as well as for mobile screen size. All data is saved to local storage. You can leave the site at anytime, then back in and your tasks will still be there!.';
  const tictactoeDesc =
    'Tic tac toe app built using React Hooks, play the classic tic tac toe game with a modern design and cool effects!. The results history is saved to firebase Realtime Database. The app is adapted for large screen size as well as for mobile screen size.';
  const saidaDesc =
    'An employee management system built as part of a workshop. The system helps managers and employees control key work processes efficiently and improve communication and documentation among employees. In addition, the system is interfacing with the Google Calendar and Google Maps API to improve daily routine processes. In order to connect please enter the following credentials: ';
  const nbaDesc =
    'NBA app built using React Hooks and Redux. All latest scores updates, teams and players details from the best league in the world. The app is connected to firebase google authentication and adapted for large screen size as well as for mobile screen size.';

  const saidaCred = (
    <span>
      <b>Admin:</b>
      <br />
      Username: omer@omer.com
      <br />
      Password: 111111113
      <br />
      <b>User:</b>
      <br />
      Username : chen@chen.com
      <br />
      Password: 111111119
    </span>
  );
  return (
    <div className='projects'>
      <div className='container-fluid'>
        <h2 className='projects-title'>Projects</h2>
        <Project
          desc={todolistDesc}
          img={TodoList}
          website={'https://mizrahiomer.github.io/todolist/'}
          source={'https://github.com/mizrahiomer/todolist'}
          title={'Todo list'}
        />
        <Project
          desc={tictactoeDesc}
          img={Tictactoe}
          website={'https://mizrahiomer.github.io/tictactoe/'}
          source={'https://github.com/mizrahiomer/tictactoe'}
          title={'Tic tac toe'}
        />
        <Project
          desc={nbaDesc}
          img={nba}
          website={'https://nba-app-7e573.firebaseapp.com/'}
          source={'https://github.com/mizrahiomer/nba'}
          title={'NBA Website'}
        />
        <Project
          desc={saidaDesc}
          img={Saida}
          website={'https://maorke.mtacloud.co.il/saida/'}
          source={'https://github.com/mizrahiomer/saida'}
          title={'Saida - BackOffice'}
          cred={saidaCred}
        />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='#252934' points='100,100 0,100 0,0' />
      </svg>
    </div>
  );
};

export default Projects;
