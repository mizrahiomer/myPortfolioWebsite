import React from 'react';
import Project from '../Project';
import data from '../../data.json';
import './index.css';

const Projects = () => {
	return (
		<div className='projects'>
			<div className='container-fluid'>
				<h2 className='projects-title'>Projects</h2>
				{data.porjects.map(project => (
					<Project
						desc={project.description}
						img={require(`../../assets/${project.image}`)}
						website={project.website}
						source={project.source}
						title={project.title}
						credentials={project.credentials}
						key={project.title}
					/>
				))}
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
				<polygon fill='#252934' points='100,100 0,100 0,0' />
			</svg>
		</div>
	);
};

export default Projects;
