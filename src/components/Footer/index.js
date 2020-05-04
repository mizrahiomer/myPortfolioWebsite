import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './index.scss';

const Footer = () => {
	const sendMail = e => {
		window.location.href = `mailto:${e.target.innerText}`;
	};
	return (
		<div className='footer-wrapper'>
			<div className='container'>
				<div className='row'>
					<div className='col'></div>
					<div className='col-5'>
						<div
							onClick={() => {
								document.getElementById('header').scrollIntoView();
							}}
						>
							<i className='fa fa-angle-up icon'></i>
						</div>
					</div>
					<div className='col'></div>
				</div>

				<div className='row'>
					<div className='col'></div>
					<div className='col-md-5 col-sm-12 footer-text'>
						<h3>Contact</h3>
						<p>
							<b>Phone: </b>
							<a className='footer-contact' href={'tel:+972-54-6625292'}>
								+972-54-6625292
							</a>
						</p>
						<p>
							<b>Email: </b>
							<span className='footer-contact' onClick={sendMail}>
								mizrahiiomer@gmail.com
							</span>
						</p>
					</div>
					<div className='col'></div>
				</div>

				<Bounce cascade>
					<div className='row social-links'>
						<div className='col'></div>
						<div className='col-3 col-md-2'>
							<a target='_blang' href='https://www.facebook.com/omer.mizrahi5'>
								<i className='fa fa-facebook icon'></i>
							</a>
						</div>
						<div className='col-3 col-md-2'>
							<a href='https://www.linkedin.com/in/omer-mizrahi-473808153/' target='_blang'>
								<i className='fa fa-linkedin icon'></i>
							</a>
						</div>
						<div className='col-3 col-md-2'>
							<a href='https://github.com/mizrahiomer' target='_blang'>
								<i className='fa fa-github icon'></i>
							</a>
						</div>
						<div className='col'></div>
					</div>
				</Bounce>
			</div>
		</div>
	);
};

export default Footer;
