import styled from 'styled-components'
import { colors } from '../../app/Constants.jsx'

const Container = styled.div`
  display: flex;

  color: ${colors.brandBlue};

  width: 75%;
  max-width: 1200px;
  max-height: 725px;
  margin: 10rem 0;
`

const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 1.25rem;
  text-align: center;
`

const ImageContainer = styled.div`
  margin: 1rem;
  img {
    width: 117px;
    height: 117px;
    object-fit: cover;
    border-radius: 25px;
    outline: ${(props) =>
      props.border ? `0.5rem solid ${colors.brandYellow}` : ''};
    outline-offset: -0.5rem;
  }
`

const SelectedImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin: 1rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
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

export {
  Container,
  SelectImage,
  SelectedImage,
  ImageContainer,
  TextContainer,
  Paragraph,
}
