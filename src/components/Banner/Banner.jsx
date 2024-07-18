import { Heading, Container, Content, Button, CTA } from './styles.jsx'
import { images } from '../../app/Constants.jsx'

export default function Banner(props) {
  const { header } = props
  return (
    <Container id="home">
      <Content>
        {header.map((line, idx) => {
          return <Heading key={idx}>{line}</Heading>
        })}
        <CTA>
          <p>
            <Button>Book</Button>
            Your Free Inspection
          </p>
        </CTA>
      </Content>
      <img src={images.banner} />
    </Container>
  )
}
