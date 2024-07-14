import { sendEmail } from './sendEmail.js'
import { ContactInfo, Container, Form } from './styles.jsx'

export default function ContactForm(props) {
  // const { image } = props

  const msg = {
    to: 'creativereyne@gmail.com', // Change to your recipient
    from: 'jccustomcreations@gmail.com', // Change to your verified sender
    subject: 'this is a test email',
    text: 'Just checking if my test works?',
    html: '<strong>Please work :(</strong>',
  }

  return (
    <Container>
      <ContactInfo>
        <h3>Phone:</h3>
        <p>1.639.998.4303</p>
        <h3>Email:</h3>
        <p>apps.dylan6@gmail.com</p>
        <h3>Social Media:</h3>
        <p>Facebook Icon</p>
      </ContactInfo>
      <Form>
        <input
          type="text"
          id="fname"
          name="fname"
        />
        <input
          type="text"
          id="lname"
          name="lname"
        />
        <input
          type="text"
          id="email"
          name="email"
        />
        <textarea
          type="text"
          id="message"
          name="message"
        />
        <input
          type="submit"
          id="submit"
          value="Submit"
          onClick={() => sendEmail(msg)}
        />
      </Form>
      {/* <button onClick={() => sendEmail(msg)}>testEmail</button> */}
    </Container>
  )
}
