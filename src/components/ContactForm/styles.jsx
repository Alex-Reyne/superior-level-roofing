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

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    width: 80%;
    align-items: center;
  }
`

const FormContainer = styled.div`
  color: ${colors.brandYellow};

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 3rem;
  }
`

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  font-size: 2rem;
  text-align: start;
  color: ${colors.brandWhite};
  width: 100%;
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

  #submit {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  #message {
    grid-column: span 4 / span 4;
    grid-row: span 3 / span 3;
    grid-column-start: 1;
    grid-row-start: 3;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
const Submit = styled.div`
  display: flex;
  grid-column: 2 / 4;
  grid-row-start: 6;

  color: ${colors.brandWhite};
  background-color: ${colors.brandBlue};
  font-size: 2rem;
  border-radius: 15px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
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

  @media screen and (max-width: 767px) {
    align-self: flex-start;
  }
`
export { Form, Container, ContactInfo, FormContainer, Submit }
