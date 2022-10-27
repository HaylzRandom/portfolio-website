import { v4 as uuidv4 } from 'uuid';
import { projects } from '../../portfolio';

// Components
import ProjectContainer from '../ProjectContainer/ProjectContainer';

// Styles
import './projects.css';

const Projects = () => {
	if (!projects.length) return null;

	return (
		<section className='section projects' id='projects'>
			<h2 className='section__title'>Projects</h2>
			<div className='projects__grid'>
				{projects.map((project) => (
					<ProjectContainer key={uuidv4()} project={project} />
				))}
			</div>
		</section>
	);
};
export default Projects;
