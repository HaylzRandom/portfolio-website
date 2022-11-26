// Styles
import './skillsContainer.css';

const SkillsContainer = ({ skill }) => {
	return (
		<li className='skills__list-item btn btn--plain'>
			<img
				src={process.env.PUBLIC_URL + skill.logo}
				alt={skill.name}
				className='skills-list__item--img'
			/>
			<span className='skills-list__item--text'>{skill.name}</span>
		</li>
	);
};
export default SkillsContainer;
