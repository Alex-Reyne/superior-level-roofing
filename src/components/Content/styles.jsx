'use client';

import styled from 'styled-components';
import {colors} from '../../app/Constants';

const Container = styled.div`
	display: flex;
	justify-content: center;

	min-height: 100vh;

	background-color: ${colors.brandBlack};
`;

const Heading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 10rem;
	min-width: 100vw;

	color: ${colors.brandRed};
	background-color: ${colors.brandYellow};

	position: relative;
	top: 0;

	z-index: 5;
`;

const Header = styled.h2`
	font-size: 64px;
`;

export {Container, Heading, Header};
