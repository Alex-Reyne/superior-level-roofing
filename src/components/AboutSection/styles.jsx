import { colors } from '../../app/Constants'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  margin: 10rem 0;

  img {
    width: 300px;
    height: 300px;
    border-radius: 100%;

    outline: 0.5rem solid ${colors.brandYellow};
    outline-offset: -0.5rem;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    max-width: 100%;
    margin: 5rem 0;
    img {
      width: 80%;
      height: 80%;

      max-width: 300px;
      max-height: 300px;
    }
  }
`

const About = styled.p`
  font-size: 2rem;
  text-align: start;
  color: ${colors.brandWhite};
  padding: 5rem;
  padding-bottom: 0;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`
export { About, Container }
