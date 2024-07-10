'use client'

import styled from 'styled-components'
import { colors } from '../../app/Constants.jsx'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.brandYellow};
  height: 100vh;
  overflow: hidden;

  img {
    z-index: 1;
    object-fit: cover;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  position: absolute;
  z-index: 5;
`

const Heading = styled.h1`
  font-size: 6rem;
`

const Button = styled.div`
  margin-top: 1rem;
  max-width: fit-content;

  padding: 1rem 2rem;
  border-radius: 15px;

  font-weight: 600;
  font-size: 4rem;
  color: ${colors.brandWhite};
  background-color: ${colors.brandRed};
`

export { Container, Heading, Content, Button }
