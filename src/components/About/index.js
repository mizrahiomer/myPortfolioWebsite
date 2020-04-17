import React from 'react';
// import MyImg from '../../assets/myImg.jpg';
import myImg from '../../assets/myImg.JPEG';
import './index.css';

const About = () => {
	return (
		<div id='about' className='about-wrapper'>
			<div className='container'>
				<h2 className='about-title'>About Me</h2>
				<div className='row'>
					<div className='col-12 col-lg-8 about-text'>
						I'm a passionate and enthusiastic about web app development. I always place UI/UX as high priority. I believe that design is the
						most valuable component on any project!. I embrace challenges and enjoy coming with innovative ways to solve them. I take pride
						being self-taught, self- motivated with can do attitude.
						<a
							target='_blang'
							className='resumeBtn'
							href='https://drive.google.com/file/d/1_x1Qm3gqoJimERHfWmUPX7ADvb0PoQ8R/view?usp=sharing'
						>
							View Resume <i className='fa fa-address-card'></i>
						</a>
					</div>
					<div className='col-12 col-lg-4'>
						<img className='my-img ' src={myImg} alt='My profile img' width='300' />
					</div>
				</div>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
				<polygon fill='#E0F6FD' points='100 ,100 0,100 0,0' />
			</svg>
		</div>
	);
};

export default About;
