import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../../data.json';
import myImg from '../../assets/myImg.JPEG';
import './index.scss';

const About = () => {
	return (
		<div id='about' className='about'>
			<Fade>
				<div className='about__content'>
					<div className='about__text'>{data.about1}</div>
					<div className='about__text'>{data.about2}</div>
					<div className='about__tech'>
						<i className='devicon-javascript-plain colored'></i>
						<i className='devicon-react-original colored'></i>
						<i className='devicon-nodejs-plain colored'></i>
						<i className='devicon-express-original colored'></i>
						<i className='devicon-html5-plain colored'></i>
						<i className='devicon-sass-original colored'></i>
					</div>
				</div>
				<div className='about__img__container'>
					<img className='about__img ' src={myImg} alt='My profile img' />
				</div>
			</Fade>
		</div>
	);
};

export default About;
