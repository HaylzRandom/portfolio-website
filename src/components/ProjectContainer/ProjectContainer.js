import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Styles
import './projectContainer.css';

const ProjectContainer = ({ project }) => {
	return (
		<div className='project'>
			<h3>{project.name}</h3>

			<p className='project__description'>{project.description}</p>
			{project.stack && (
				<ul className='project__stack'>
					{project.stack.map((item) => (
						<li className='project__stack-item' key={uuidv4()}>
							{item}
						</li>
					))}
				</ul>
			)}

			{project.sourceCode && (
				<a
					href={project.sourceCode}
					aria-label='source code'
					className='link link--icon'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon  icon={faGithub} />
				</a>
			)}

			{project.livePreview && (
				<a
					href={project.livePreview}
					aria-label='live preview'
					className='link link--icon'
					target='_blank'
					rel='noreferrer'
				>
					<FontAwesomeIcon
						
						icon={faArrowUpRightFromSquare}
					/>
				</a>
			)}
		</div>
	);
};
export default ProjectContainer;
