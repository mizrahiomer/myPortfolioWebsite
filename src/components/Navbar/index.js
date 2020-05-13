import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import LogoLight from '../../assets/LogoLight.png';
import LogoDark from '../../assets/LogoDark.png';
import './index.scss';

const Navbar = () => {
	const [background, setBackground] = useState(null);
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 100) {
				if (!background) {
					setBackground('background');
				}
			} else {
				if (background) {
					setBackground(null);
				}
			}
		};
		window.addEventListener('scroll', handleScroll);
	});
	return (
		<div className={`navbar ${background}`}>
			<div className='navbar__logo__wrapper'>
				<img className='navbar__logo' alt='My Logo' src={background ? LogoLight : LogoDark} />
			</div>
			<Link
				activeClass='active'
				className='navbar__link'
				to='about'
				spy={true}
				smooth={true}
				duration={300}
			>
				About
			</Link>
			<Link
				activeClass='active'
				className='navbar__link'
				to='projects'
				spy={true}
				smooth={true}
				duration={300}
			>
				Projects
			</Link>
			<Link
				activeClass='active'
				className='navbar__link'
				to='footer'
				smooth={true}
				spy={true}
				duration={300}
			>
				Contact
			</Link>
		</div>
	);
};

export default Navbar;
