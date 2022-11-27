import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCertificate } from '@fortawesome/free-solid-svg-icons';

// Styles
import './trainingContainer.css';

const TrainingContainer = ({ training }) => {
	return (
		<div className='course'>
			<img
				src={process.env.PUBLIC_URL + training.logo}
				alt={training.logoAlt}
				className='course__logo'
			/>

			<h3>{training.name}</h3>

			<p className='course__description'>{training.description}</p>
			{training.description2 && (
				<p className='course__description'>{training.description2}</p>
			)}

			<div className='course__links'>
				{training.courseLink && (
					<a
						href={training.courseLink}
						aria-label='training course link'
						className='link link--icon'
						target='_blank'
						rel='noreferrer'
						title={`${training.name} Course Link`}>
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
						title={`${training.name} Certificate Link`}>
						<FontAwesomeIcon icon={faCertificate} />
					</a>
				)}
			</div>
		</div>
	);
};
export default TrainingContainer;
