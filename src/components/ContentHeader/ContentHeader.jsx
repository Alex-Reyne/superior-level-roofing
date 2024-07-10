import { Heading, Header } from './styles.jsx'

export default function Content(props) {
  const { header } = props

  return (
    <Heading>
      <Header>{header}</Header>
    </Heading>
  )
}
