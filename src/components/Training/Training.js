import { v4 as uuidv4 } from 'uuid';
import { training, about } from '../../portfolio';
import TrainingContainer from '../TrainingContainer/TrainingContainer';

// Styles
import './training.css';

const Training = () => {
	if (!training.length) return null;

	return (
		<section className='section training' id='training'>
			<h2 className='section__title'>Training Courses</h2>
			<div className='training__grid'>
				{training.map((course) => (
					<TrainingContainer key={uuidv4()} training={course} />
				))}
			</div>
			<p className='training__more'>
				A full list of the training I have completed can be found on my{' '}
				<a
					className='link'
					href={`${about.social.linkedin}details/certifications/`}
					target='_blank'
					rel='noreferrer'>
					LinkedIn Profile
				</a>
				!
			</p>
		</section>
	);
};
export default Training;
