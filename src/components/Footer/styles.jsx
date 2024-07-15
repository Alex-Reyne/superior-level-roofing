import { colors } from '../../app/Constants'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background-color: ${colors.brandRed};
`
const Text = styled.div`
  color: ${colors.brandWhite};

  p {
    font-size: 2rem;
    font-weight: 500;
  }
`

export { Container, Text }
