import { Container, About } from './styles.jsx'

export default function AboutSection(props) {
  const { image, aboutText } = props
  return (
    <Container>
      <img src={image} />
      <About>{aboutText}</About>
    </Container>
  )
}
