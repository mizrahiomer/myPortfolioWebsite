import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import data from '../../data.json';
import './index.scss';

const Footer = () => {
	return (
		<div id='footer' className='footer'>
			<Fade>
				<Link className='footer__btn' to='header' spy={true} smooth={true} duration={450}>
					<i className='fa fa-angle-up icon'></i>
				</Link>
				<div className='footer__title'>Contact Me</div>
				<hr />

				<div className=' footer__text'>
					<span>So you think I'm the right developer for you ?</span>
					<span>Get in touch !</span>

					<a className='footer__contact' href={`tel:${data.phone}`}>
						{data.phone}
					</a>

					<a className='footer__contact' href={`mailto:${data.email}`}>
						{data.email}
					</a>
				</div>
				<div className='footer__social'>
					<Bounce cascade>
						<a href={data.facebook} target='_blang'>
							<i className='fa fa-facebook icon '></i>
						</a>
						<a href={data.linkedin} target='_blang'>
							<i className='fa fa-linkedin icon '></i>
						</a>
						<a href={data.github} target='_blang'>
							<i className='fa fa-github icon '></i>
						</a>
					</Bounce>
				</div>
				<div className='footer__copyright'>
					<i className='far fa-copyright'></i> Omer Mizrahi Full Stack Web Developer
				</div>
			</Fade>
		</div>
	);
};

export default Footer;
