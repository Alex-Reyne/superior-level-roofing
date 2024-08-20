// 'use server'
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// export async function sendEmail(msg) {
//   const { firstName, lastName } = msg

//   const msgParse = {
//     ...msg,
//     subject: `Inquiry from ${firstName} ${lastName} VIA superiorlevelroofing.com`,
//     html: `Inquiry from ${firstName} ${lastName} VIA superiorlevelroofing.com`,
//   }

//   await sgMail
//     .send(msgParse)
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error.response.body)
//     })
// }

export async function sendEmail(e, form) {
  e.preventDefault()

  try {
    const response = await fetch('/api/contact', {
      method: 'post',
      body: form,
    })

    if (!response.ok) {
      console.log('falling over')
      throw new Error(`response status: ${response.status}`)
    }
    const responseData = await response.json()
    console.log(responseData['message'])

    alert('Message successfully sent')
  } catch (err) {
    console.error(err)
    alert('Error, please try resubmitting the form')
  }
}
