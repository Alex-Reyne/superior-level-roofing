'use client';

import styled from 'styled-components';
import {colors} from '../../app/Constants';

const Container = styled.div`
	position: static;
	text-align: left;
	color: ${colors.brandYellow};
`;

const Heading = styled.h1`
	position: absolute;
	width: 40rem;
	top: 50%;
	left: 15%;
	z-index: 5;
	font-size: 64px;
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
