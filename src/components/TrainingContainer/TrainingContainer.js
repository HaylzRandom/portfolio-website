import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCertificate } from '@fortawesome/free-solid-svg-icons';

// Styles
import './trainingContainer.css';

const TrainingContainer = ({ training }) => {
	return (
		<div className='course'>
			<img src='./images/haylzpic.png' alt='' className='course__logo' />

			<h3>{training.name}</h3>

			<p className='course__description'>{training.description}</p>
			<img src='' alt='' />
			<div className='course__links'>
				{training.courseLink && (
					<a
						href={training.courseLink}
						aria-label='training course link'
						className='link link--icon'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faLink} />
					</a>
				)}
				{training.certLink && (
					<a
						href={training.certLink}
						aria-label='certificate link'
						className='link link--icon'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faCertificate} />
					</a>
				)}
			</div>
		</div>
	);
};
export default TrainingContainer;
