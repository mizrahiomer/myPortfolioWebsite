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
							<div
								className='headerBtn'
								onClick={() => {
									document.getElementById('about').scrollIntoView();
								}}
							>
								<i className='fa fa-angle-double-down'></i>
							</div>
						</div>
					</Pulse>
				</div>
			</div>
		</div>
	);
};

export default Header;
