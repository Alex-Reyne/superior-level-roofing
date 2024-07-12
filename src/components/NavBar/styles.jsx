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

  @media screen and (max-width: 700px) {
    position: fixed;
    top: 0;

    z-index: 1000;
  }
  @media screen and (max-width: 480px) {
    img {
      height: 75px;
    }
  }
`

const Links = styled.div`
  display: flex;

  justify-content: space-between;
  width: auto;
  gap: 2rem;

  a {
    color: ${colors.brandRed};
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;

    width: 100%;

    background-color: rgba(240, 240, 240, 0.75);
    backdrop-filter: blur(10px);

    position: absolute;
    left: 0;
    top: calc(4rem + 100px);
    gap: 0;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 4rem;

      width: 100%;
      height: 5rem;
    }

    visibility: hidden;
    opacity: 0;

    ${(props) =>
      props.isOpen &&
      `
        visibility: visible;
        opacity: 1;
        `}

    transition: visibility 0.3s, opacity 0.3s linear;
  }

  @media screen and (max-width: 480px) {
    top: calc(4rem + 75px);
  }
`

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80px;
  height: 70px;

  div {
    height: 1rem;
    width: 100%;
    background-color: ${colors.brandRed};
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    div {
      height: 0.75rem;
    }
  }
`

export { Container, Links, BurgerMenu }
