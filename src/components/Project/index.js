import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ClipLoader } from 'react-spinners';
import './index.scss';

const Project = ({ title, desc, website, source, video }) => {
	const [loading, setLoading] = useState(true);
	return (
		<div className='project'>
			{loading && <ClipLoader />}
			<Fade>
				<div>
					<div className='project__title'>{title}</div>
					<video
						loop
						muted
						autoPlay
						playsInline
						className='project__video'
						onCanPlay={() => setLoading(false)}
					>
						><source src={video}></source>
					</video>
				</div>
				<div className='project__text'></div>
				<div className='project__btns'>
					<a href={website} target='_blang' className='project__btn'>
						Website
					</a>
					<a href={source} target='_blang' className='project__btn'>
						Source Code
					</a>
					{/* {credentials && (
						<div href={source} target='_blang' className='project__btn'>
							Credentials
						</div>
					)} */}
				</div>
			</Fade>
		</div>
	);
};
export default Project;
