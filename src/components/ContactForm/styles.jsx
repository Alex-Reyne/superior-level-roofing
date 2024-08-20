import { colors } from '../../app/Constants'
import { styled } from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 80%;
  max-width: 1200px;
  margin: 10rem 0;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5rem;
  }
`

const FormContainer = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 5 / span 5;
  grid-column-start: 4;
  color: ${colors.brandYellow};

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    grid-column: span 2 / span 2;
    grid-row: span 5 / span 5;
    grid-column: span 3 / span 3;
  }
  @media screen and (max-width: 767px) {
    grid-column: span 2 / span 2;
    grid-row-start: 1;
  }
`

const Form = styled.form`
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
const Submit = styled.button`
  display: flex;
  grid-column: 4 / 5;
  grid-row-start: 6;

  color: ${colors.brandWhite};
  background-color: ${colors.brandBlue};
  font-size: 2rem;
  border-radius: 15px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover,
  &:focus {
    color: ${colors.brandYellow};
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2 / span 2;
  grid-row: span 5 / span 5;
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

  a,
  img {
    width: 50px;
    height: auto;
  }

  @media screen and (max-width: 767px) {
    grid-column: span 2 / span 2;
  }
`
export { Form, Container, ContactInfo, FormContainer, Submit }
