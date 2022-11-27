import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Styles
import './footer.css';

const Footer = () => {
	return (
		<footer id='footer' className='footer'>
			<a
				href='https://github.com/haylzrandom'
				className='footer__link'
				target='_blank'
				rel='noreferrer'>
				<FontAwesomeIcon className='heart__icon' icon={faHeart} />
				Created by Hayley McCafferty
				<FontAwesomeIcon className='heart__icon' icon={faHeart} />
			</a>
		</footer>
	);
};
export default Footer;
