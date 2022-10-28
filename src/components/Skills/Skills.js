import { v4 as uuidv4 } from 'uuid';
import { skills } from '../../portfolio';
import SkillsContainer from '../SkillsContainer/SkillsContainer';

// Styles
import './skills.css';

const Skills = () => {
	if (!skills.length) return null;
	return (
		<section className='section skills' id='skills'>
			<h2 className='section__title'>Skills</h2>
			<ul className='skills__list'>
				{skills.map((skill) => (
					<SkillsContainer key={uuidv4()} skill={skill} />
				))}
			</ul>
		</section>
	);
};
export default Skills;
