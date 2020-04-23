import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ClipLoader } from 'react-spinners';
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
											<div className='credentials' key={credential.type}>
												<div className='credentials-type'>{credential.type}</div>
												<b>Username:</b>
												<span className='copy-text'>{credential.username}</span>
												<i
													onClick={() => {
														document.getElementById(credential.username).select();
														document.execCommand('copy');
													}}
													className='fa fa-clipboard copy-icon'
												></i>
												<input defaultValue={credential.username} id={credential.username} />
												<br />
												<b>Password:</b>

												<span className='copy-text'>{credential.password}</span>

												<i
													className='fa fa-clipboard copy-icon'
													onClick={() => {
														document.getElementById(credential.password).select();
														document.execCommand('copy');
													}}
												></i>

												<input defaultValue={credential.password} id={credential.password} />
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
				{loading ? <ClipLoader /> : null}
				<Fade right>
					<video loop muted autoPlay className='project-video' onCanPlay={() => setLoading(false)}>
						><source src={video}></source>
					</video>
				</Fade>
			</div>
		</div>
	);
};
export default Project;
