import { colors } from '../../app/Constants'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
  width: 60%;
  max-width: 1200px;
  margin: 10rem 0;
`

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  font-size: 2rem;
  text-align: start;
  color: ${colors.brandWhite};
  width: 50%;
  gap: 1rem;

  input,
  textarea {
    border: none;
    border-radius: 15px;
    padding: 1rem;
  }

  input {
    height: 3rem;
  }

  #fname {
    grid-column: span 2 / span 2;
  }
  #lname {
    grid-column: span 2 / span 2;
    grid-column-start: 3;
  }

  #email {
    grid-column: span 4 / span 4;
    grid-row-start: 2;
  }
  #message {
    grid-column: span 4 / span 4;
    grid-row: span 3 / span 3;
    grid-column-start: 1;
    grid-row-start: 3;
  }
  #submit {
    grid-column-start: 4;
    grid-row-start: 6;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 3rem;
    margin-top: 1rem;
    color: ${colors.brandYellow};
  }

  p {
    font-size: 2rem;
    color: ${colors.brandWhite};
  }
`
export { Form, Container, ContactInfo }
