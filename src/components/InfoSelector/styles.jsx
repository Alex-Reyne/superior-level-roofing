import styled from 'styled-components'
import { colors } from '../../app/Constants.jsx'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;

  color: ${colors.brandBlue};

  width: 100%;
  max-width: 1000px;
  margin: 10rem 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 5fr 1fr;
    margin: 0 5rem 5rem 5rem;
    padding: 0 5rem;
    gap: 1rem;
  }

  @media screen and (max-width: 700px) {
    grid-template-rows: 1fr;
    padding: 0 5%;
    position: relative;
    margin: 0;
  }
`

const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  grid-column: 1 / 2;

  align-items: center;

  font-size: 1.25rem;
  text-align: center;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    grid-row: 2 / 3;
  }
`

const ImageContainer = styled.div`
  margin: 1rem;

  img {
    height: 8rem;
    width: auto;
    object-fit: cover;
    border-radius: 25px;
    overflow: hidden;
    outline: ${(props) =>
      props.border ? `0.5rem solid ${colors.brandYellow}` : ''};
    outline-offset: -0.5rem;
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
    font-size: 1rem;
  }
`

const SelectedImage = styled.div`
  display: flex;
  grid-column: 2 / 6;
  margin: 1rem;
  position: relative;

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 25px;
    bottom: 0;
  }

  @media screen and (max-width: 1024px) {
    grid-column: auto;
    grid-row: 1 / 2;
    width: 100%;
    justify-self: center;

    img {
      height: 90%;
      position: absolute;
    }
  }
`

const TextContainer = styled.div`
  text-align: center;
  font-size: 2rem;
  color: ${colors.brandBlack};

  position: absolute;
  bottom: 0;
  z-index: 5;

  overflow: hidden;

  border-radius: 0 0 25px 25px;
  background-color: ${colors.brandYellow};
  opacity: 75%;

  padding: 2rem;
  max-height: 9rem;
  width: 100%;

  &:hover {
    max-height: 100%;
  }

  transition: max-height 1s;
`

const Paragraph = styled.p`
  transition: max-height 1s;
  display: ${(props) =>
    props.idx === 1 && props.copyView === 'small' ? 'none' : null};
`

const MobileContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

export {
  Container,
  SelectImage,
  SelectedImage,
  ImageContainer,
  TextContainer,
  Paragraph,
  MobileContainer,
}
