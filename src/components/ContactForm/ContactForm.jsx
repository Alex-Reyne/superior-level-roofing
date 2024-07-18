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
  to: 'creativereyne@gmail.com', // Change to your recipient
  from: 'jccustomcreations@gmail.com', // Change to your verified sender
  subject: '',
  text: '',
  html: '<strong>Sent From superiorlevelroofing.com</strong>',
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
        <p>Facebook Icon</p>
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
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Submit onClick={() => sendEmail(form)}>
            <input
              type="submit"
              id="submit"
              value="Send"
            />
          </Submit>
        </Form>
      </FormContainer>
    </Container>
  )
}
