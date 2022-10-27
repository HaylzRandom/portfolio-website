import { header } from '../../portfolio';

// Components
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

// Styles
import './header.css';

const Header = () => {
	const { homepage, title } = header;
	return (
		<header className='header center'>
			<h3>
				{homepage && (
					<a href={homepage} className='link'>
						<Logo />
					</a>
				)}
			</h3>
			<Navbar />
		</header>
	);
};
export default Header;
