import { Heading, Header } from './styles.jsx'

export default function Content(props) {
  const { header, id } = props

  return (
    <Heading id={id}>
      <Header>{header}</Header>
    </Heading>
  )
}
