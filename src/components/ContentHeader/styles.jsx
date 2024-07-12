'use client'

import styled from 'styled-components'
import { colors } from '../../app/Constants.jsx'

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10rem;
  min-width: 100vw;

  color: ${colors.brandRed};
  background-color: ${colors.brandYellow};

  /* background: linear-gradient(
    90deg,
    rgba(255, 209, 102, 0) 0%,
    rgba(255, 209, 102, 1) 50%,
    rgba(255, 209, 102, 0) 100%
  ); */

  position: relative;
  top: 0;

  z-index: 5;
`

const Header = styled.h2`
  font-size: 64px;
`

export { Heading, Header }
