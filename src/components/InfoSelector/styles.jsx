import styled from 'styled-components';
import {colors} from '../../app/Constants';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 80%;
`;

const SelectImage = styled.div`
	display: column;
	flex-direction: column;
	width: 20%;
	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
`;

const SelectedImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	img {
		height: 75%;
		width: 75%;
	}
`;

export {Container, SelectImage, SelectedImage};
