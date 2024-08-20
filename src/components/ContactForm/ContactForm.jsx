import { useState } from 'react'
import { sendEmail } from './sendEmail.js'
import {
  ContactInfo,
  Container,
  Form,
  FormContainer,
  Submit,
} from './styles.jsx'

const msg = {
  to: 'jccustomcreations@gmail.com', // Change to your recipient
  from: 'jccustomcreations@gmail.com', // Change to your verified sender
  subject: '',
  text: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(msg)

  return (
    <Container>
      <ContactInfo>
        <h3>Phone:</h3>
        <p>1.639.998.4303</p>
        <h3>Email:</h3>
        <p>apps.dylan6@gmail.com</p>
        <h3>Social Media:</h3>
        <a
          href="https://www.facebook.com/SuperiorHouseCare"
          target="_blank"
        >
          <img src="facebook-app-round-white-icon.webp" />
        </a>
      </ContactInfo>
      <FormContainer>
        <h3>Send us and email</h3>
        <Form>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, replyTo: e.target.value })}
          />
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />
          <Submit
            type="submit"
            id="submit"
            onClick={(e) => sendEmail(e, form)}
          >
            Send
          </Submit>
        </Form>
      </FormContainer>
    </Container>
  )
}
