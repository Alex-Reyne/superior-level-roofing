import { colors } from '../../app/Constants'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60%;
  margin: 10rem;

  img {
    width: 300px;
    height: 300px;
    border-radius: 100%;

    outline: 0.5rem solid ${colors.brandYellow};
    outline-offset: -0.5rem;
  }
`

const About = styled.p`
  font-size: 2rem;
  text-align: start;
  color: ${colors.brandWhite};
  padding: 5rem;
`
export { About, Container }
