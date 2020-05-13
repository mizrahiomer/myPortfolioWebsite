import React, { useState } from 'react';
import Pulse from 'react-reveal/Pulse';
import Bounce from 'react-reveal/Bounce';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import data from '../../data.json';
import './index.scss';

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<div id='header' className='header'>
			<div className='header__text'>
				<Typed
					startDelay={2500}
					showCursor={false}
					onComplete={() => {
						setShow(true);
					}}
					typeSpeed={50}
					strings={[data.intro]}
				></Typed>
			</div>
			<div className='header__icons'>
				<Bounce cascade when={show}>
					<a href={data.facebook} target='_blang'>
						<i className='fab fa-facebook header__icon'></i>
					</a>
					<a href={data.linkedin} target='_blang'>
						<i className='fab fa-linkedin header__icon'></i>
					</a>
					<a href={data.github} target='_blang'>
						<i className='fab fa-github header__icon'></i>
					</a>
					<a href={`mailto:${data.email}`} target='_blang'>
						<i className='fas fa-envelope header__icon'></i>
					</a>
				</Bounce>
			</div>

			{show && (
				<Pulse forever>
					<Link className='header__btn' to='about' spy={true} smooth={true} duration={400}>
						<i className='fa fa-angle-down'></i>
					</Link>
				</Pulse>
			)}
		</div>
	);
};

export default Header;
