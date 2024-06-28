import Banner from '@/components/Banner/Banner.jsx';
import {Main} from './styles.jsx';
import NavBar from '@/components/NavBar/NavBar.jsx';
import Content from '@/components/Content/Content.jsx';
import {headers} from './Constants.js';

export default function Home() {
	return (
		<Main>
			<NavBar />
			<Banner header={headers.header1} />
			<Content header={headers.header2} />
			<Content header={headers.header3} />
			<Content header={headers.header4} />
		</Main>
	);
}
