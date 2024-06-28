import Image from 'next/image.js';
import logo from '../../../public/superior-level-roofing-logo.png';
import {Container, Links} from './styles.jsx';

export default function NavBar() {
	return (
		<Container>
			<Image src={logo} />
			<Links>
				<a href=''>Home</a>
				<a href=''>Services</a>
				<a href=''>About</a>
				<a href=''>Contact</a>
			</Links>
		</Container>
	);
}
