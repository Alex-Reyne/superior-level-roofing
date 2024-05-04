'use client'

import styled from 'styled-components'
import { colors } from '../../app/Constants'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  
  background-color: ${colors.brandWhite};

  img {
    min-width: 100%;
    min-height: 100%;
  }
`

const Links = styled.div`
  display: flex;
  
  justify-content: space-between;
  width: 40rem;

  /* border: 2px solid white; */
  a {
    color: ${colors.brandRed};
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
  }
`

export { Container, Links }