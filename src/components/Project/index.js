import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ClipLoader } from 'react-spinners';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.scss';

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
												<span className='credentials-title'>Username:</span>
												<span className='copy-text'>{credential.username}</span>
												<CopyToClipboard text={credential.username}>
													<i className='fa fa-clipboard copy-icon'></i>
												</CopyToClipboard>

												<br />
												<span className='credentials-title'>Password:</span>
												<span className='copy-text'>{credential.password}</span>
												<CopyToClipboard text={credential.password}>
													<i className='fa fa-clipboard copy-icon'></i>
												</CopyToClipboard>
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
