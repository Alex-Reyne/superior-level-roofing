'use client'

import styled from 'styled-components'
import { colors } from '../../app/Constants.jsx'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10%;
  width: 100vw;

  background-color: ${colors.brandWhite};
  top: 0;
  position: absolute;
  z-index: 999;

  img {
    height: 100px;
    width: auto;
  }
`

const Links = styled.div`
  display: flex;

  justify-content: space-between;
  width: 40rem;

  a {
    color: ${colors.brandRed};
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export { Container, Links }
