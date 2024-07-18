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

  @media screen and (min-width: 2000px) {
    img {
      width: 100vw;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1200px;
  position: absolute;
  z-index: 5;
`

const Heading = styled.h1`
  font-size: 6rem;

  @media screen and (max-width: 767px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`

const CTA = styled.div`
  display: flex;
  align-items: center;

  p {
    color: ${colors.brandWhite};
    font-size: 4rem;
    font-weight: 600;

    @media screen and (max-width: 767px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }
`

const Button = styled.button`
  margin-top: 1rem;
  max-width: fit-content;
  border: none;

  padding: 0.5rem 1rem;
  border-radius: 15px;

  font-weight: 600;
  font-size: 4rem;
  color: ${colors.brandWhite};
  background-color: ${colors.brandRed};
  margin-right: 1rem;

  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export { Container, Heading, Content, Button, CTA }
