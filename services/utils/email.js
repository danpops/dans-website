module.exports = { createEmailBody, createEmailParams }

function createEmailBody ({ fullName, email, message }) {
  const html = `
      <html>
      <head></head>
      <body>
          <h3>Website Contact Form</h3>
          <p>${fullName} with email address ${email} reached out to you!</p>
          <p>Their message is:</p>
          <p>${message}</p>
      </body>
      </html>
  `
  const text = `${fullName} with email address ${email} reached out to you! Their message is: ${message}`
  return { html, text }
}
function createEmailParams ({ html, text }) {
  return {
    Destination: { ToAddresses: [process.env.TO_ADDRESS] },
    Message: {
      Body: {
        Html: { Charset: 'UTF-8', Data: html },
        Text: { Charset: 'UTF-8', Data: text }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: "Dan's website contact form submission"
      }
    },
    Source: process.env.SOURCE_ADDRESS
  }
}
