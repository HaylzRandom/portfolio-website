import { v4 as uuidv4 } from 'uuid';
import { training } from '../../portfolio';
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
		</section>
	);
};
export default Training;
