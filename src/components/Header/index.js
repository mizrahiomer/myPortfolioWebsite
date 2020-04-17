import React from 'react';
import Pulse from 'react-reveal/Pulse';
import './index.css';

const Header = () => {
	return (
		<div id='header' className='header-section'>
			<div className='stars'></div>
			<div className='stars2'></div>
			<div className='stars3'></div>
			<div className='header-title'>
				<div className='header-text'>
					<h1 className='opening-text'>
						Hi, my name is
						<span className='name-text-color'> Omer Mizrahi</span>
						<br />
						I'm a frontend developer who specializes in React
					</h1>
					<Pulse forever>
						<div>
							<a className='headerBtn' href='#about'>
								<i className='fa fa-angle-double-down'></i>
							</a>
						</div>
					</Pulse>
				</div>
			</div>
		</div>
	);
};

export default Header;
