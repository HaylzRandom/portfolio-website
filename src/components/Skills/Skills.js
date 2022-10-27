import { v4 as uuidv4 } from 'uuid';
import { skills } from '../../portfolio';

// Styles
import './skills.css';

const Skills = () => {
	if (!skills.length) return null;
	return (
		<section className='section skills' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<ul className='skills__list'>
				{skills.map((skill) => (
					<li className='skills__list-item btn btn--plain' key={uuidv4()}>
						{skill}
					</li>
				))}
			</ul>
		</section>
	);
};
export default Skills;
