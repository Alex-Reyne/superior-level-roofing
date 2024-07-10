import { Background, Heading, Container, Content, Button } from './styles.jsx'
import { images } from '../../app/Constants.jsx'

export default function Banner(props) {
  const { header } = props
  return (
    <Container>
      <Content>
        {header.map((line) => {
          return <Heading>{line}</Heading>
        })}
        <Button>Book Your Free Inspection</Button>
      </Content>
      <img src={images.banner} />
    </Container>
  )
}
