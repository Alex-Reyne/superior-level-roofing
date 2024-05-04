'use client'

import styled from 'styled-components'
import { colors } from '../../app/Constants'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8rem;
  width: 100vw;
  
  background-color: ${colors.brandWhite};
  top: 0;
  position: fixed;
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

  /* border: 2px solid white; */
  a {
    color: ${colors.brandRed};
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
  }
`

export { Container, Links }