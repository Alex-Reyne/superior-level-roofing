import {Heading, Header, Container} from './styles.jsx';

export default function Content(props) {
	const {header} = props;
	return (
		<Container>
			<Heading>
				<Header>{header}</Header>
			</Heading>
		</Container>
	);
}
