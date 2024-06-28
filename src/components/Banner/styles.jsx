'use client';

import styled from 'styled-components';
import {colors} from '../../app/Constants';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Heading = styled.h1`
	font-size: 64px;
	width: 40rem;
	left: 15%;
	position: absolute;
	z-index: 5;
`;

const Background = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	height: 100vh;

	background-color: ${colors.brandWhite};

	img {
		z-index: 1;
		min-width: 100%;
		min-height: 100%;
	}
`;

export {Container, Heading, Background};
