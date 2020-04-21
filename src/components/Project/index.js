import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import ClipLoader from 'react-spinners/ClipLoader';
import './index.css';

const Project = ({ title, desc, website, source, video, credentials }) => {
	const [loading, setLoading] = useState(true);
	return (
		<div className='row my-5 px-3'>
			<div className='col-lg-6 '>
				<Fade left>
					<h3 className='project-title'>{title}</h3>
					<div>
						<div className='project-text'>
							{desc}

							{credentials
								? credentials.map(credential => {
										return (
											<div className='credential' key={credential.type}>
												<div className='credential-type'>{credential.type}</div>
												<div>Username: {credential.username}</div>
												<div>Password: {credential.password}</div>
											</div>
										);
								  })
								: null}
						</div>

						<a href={website} target='_blang' className='websiteBtn'>
							View Website
						</a>
						<a href={source} target='_blang' className='websiteBtn'>
							Source Code
						</a>
					</div>
				</Fade>
			</div>
			<div className='col-lg-6'>
				<Fade right>
					<video loop autoPlay className='project-video'>
						<source src={video}></source>
					</video>
				</Fade>
			</div>
		</div>
	);
};
export default Project;
