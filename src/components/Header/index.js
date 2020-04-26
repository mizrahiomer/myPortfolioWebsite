import React, { useState } from 'react';
import Pulse from 'react-reveal/Pulse';
import './index.css';
import Typist from 'react-typist';

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<div id='header' className='header-section'>
			<div className='stars'></div>
			<div className='stars2'></div>
			<div className='stars3'></div>
			<div className='header-title'>
				<div className='header-text'>
					<Typist
						cursor={{ show: false }}
						onTypingDone={() => {
							setShow(true);
						}}
					>
						<div className='opening-text'>
							My name is
							<span className='name-text-color'> Omer Mizrahi</span>
							<br />
							I'm a Full stack developer specialize in React and Node.js
						</div>
					</Typist>
					{show ? (
						<Pulse forever>
							<div
								className='headerBtn'
								onClick={() => {
									document.getElementById('about').scrollIntoView();
								}}
							>
								<i className='fa fa-angle-down'></i>
							</div>
						</Pulse>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Header;
