import {Background, Heading, Container} from './styles.jsx';
import {images} from '../../app/Constants.js';

export default function Banner(props) {
	const {header} = props;
	return (
		<Container>
			<Heading>{header}</Heading>
			<Background>
				<img src={images.banner} />
			</Background>
		</Container>
	);
}
