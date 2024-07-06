import {useState} from 'react';
import {Container, SelectImage, SelectedImage} from '../InfoSelector/styles';

export default function InfoSelector({infoSelectorData}) {
	const [copyView, setCopyview] = useState();

	return (
		<Container>
			<SelectImage>
				{infoSelectorData.map(item => {
					return <img src={item.image} />;
				})}
			</SelectImage>
			<SelectedImage>
				<img src={infoSelectorData[0].image} />
			</SelectedImage>
		</Container>
	);
}
