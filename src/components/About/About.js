import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons';
import { SiFrontendmentor } from 'react-icons/si';
import { about } from '../../portfolio';

// Styles
import './about.css';

const About = () => {
	const { name, role, description, cvLink, social } = about;
	return (
		<section className='about center'>
			{name && (
				<h1>
					Hi, I am <span className='about__name'>{name}.</span>
				</h1>
			)}

			{role && <h2 className='about__role'>A {role}.</h2>}
			<p className='about__desc'>{description && description}</p>

			<div className='about__contact'>
				{social && (
					<>
						{social.github && (
							<a
								href={social.github}
								aria-label='github'
								className='link link--icon'
								target='_blank'
								rel='noreferrer'
								title='Github'>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						)}

						{social.linkedin && (
							<a
								href={social.linkedin}
								aria-label='linkedin'
								className='link link--icon'
								target='_blank'
								rel='noreferrer'
								title='LinkedIn'>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						)}

						{social.freeCodeCamp && (
							<a
								href={social.freeCodeCamp}
								aria-label='freeCodeCamp'
								className='link link--icon'
								target='_blank'
								rel='noreferrer'
								title='freeCodeCamp'>
								<FontAwesomeIcon icon={faFreeCodeCamp} />
							</a>
						)}

						{social.frontEndMentor && (
							<a
								href={social.frontEndMentor}
								aria-label='frontEndMentor'
								className='link link--icon'
								target='_blank'
								rel='noreferrer'
								title='frontendMentor'>
								<SiFrontendmentor className='frontend-mentor' />
							</a>
						)}
					</>
				)}
			</div>
			<div className='about__cv'>
				{cvLink && (
					<a href={cvLink} target='_blank' rel='noreferrer'>
						<button type='button' className='cv__btn'>
							Download CV
						</button>
					</a>
				)}
			</div>
		</section>
	);
};
export default About;
