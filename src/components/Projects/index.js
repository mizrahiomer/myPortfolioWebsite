import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from '../Project';
import data from '../../data.json';
import './index.scss';

const Projects = () => {
	return (
		<div id='projects' className='projects'>
			<Fade>
				<div className='projects__title'>Projects</div>
			</Fade>
			<div className='projects__container'>
				{data.porjects.map(project => (
					<Project
						desc={project.description}
						video={require(`../../assets/${project.video}`)}
						website={project.website}
						source={project.source}
						title={project.title}
						key={project.title}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
