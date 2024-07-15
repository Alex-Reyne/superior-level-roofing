import { Container, Text } from './styles.jsx'

export default function Footer(props) {
  const { footerText } = props

  return (
    <Container>
      <Text>
        <p>{footerText}</p>
      </Text>
    </Container>
  )
}
