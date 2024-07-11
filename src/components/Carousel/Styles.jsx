const { default: styled } = require('styled-components')
import { colors } from '@/app/Constants'

/* src/Carousel.css */
const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: repeat(1fr);
  justify-items: center;
  align-items: center;
  margin-top: 10rem;

  position: relative;

  h2 {
    grid-column-start: 1;
    grid-column-end: 4;

    text-align: center;
    font-size: 4rem;

    margin-bottom: 2rem;
  }
`
const CarouselButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;

  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 3rem;
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s;
  height: 25%;
  .carousel__btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`
const CarouselImg = styled.img`
  width: 100%;
  max-height: 23rem;
  display: block;
  object-fit: cover;
  border-radius: 25px;
  overflow: hidden;
  outline: 0.5rem solid ${colors.brandYellow};
  outline-offset: -0.5rem;
  margin-bottom: 1rem;
`

const CarouselCopy = styled.p`
  color: white;
  grid-column-start: 1;
  grid-column-end: 4;

  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

const ExpandButton = styled.button`
  color: white;
  border: none;
  background-color: ${colors.brandBlue};
  border-radius: 20px;
  padding: 1rem 3rem;
  width: max-content;
  text-align: center;
  font-size: 1.5rem;
  grid-column-start: 2;
  cursor: pointer;

  ${(props) =>
    props.expanded &&
    `
  background-color: ${colors.brandRed};
  margin-top: 1.5rem;
  `}
`
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colors.brandWhite};

  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  position: absolute;
  z-index: 999;
  padding: 3rem;
  font-size: 1.5rem;

  overflow: hidden;

  h2 {
    text-align: center;
    font-size: 4rem;

    margin-bottom: 2rem;
    color: ${colors.brandBlue};
  }
`

export {
  CarouselContainer,
  CarouselButton,
  CarouselImg,
  CarouselCopy,
  ExpandButton,
  Modal,
}
