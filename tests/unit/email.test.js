/* globals describe, expect, it */
const {
  createEmailBody,
  createEmailParams
} = require('../../services/utils/email')

describe('email tests', () => {
  const fullName = 'Test User'
  const email = 'user@test.com'
  const message = 'test message 123'
  describe('createEmailBody', () => {
    it('should create html and text email body', () => {
      const actual = createEmailBody({ fullName, email, message })
      const expected = {
        html: `
      <html>
      <head></head>
      <body>
          <h3>Website Contact Form</h3>
          <p>${fullName} with email address ${email} reached out to you!</p>
          <p>Their message is:</p>
          <p>${message}</p>
      </body>
      </html>
  `,
        text: `${fullName} with email address ${email} reached out to you! Their message is: ${message}`
      }
      expect(actual).toStrictEqual(expected)
    })
  })
  describe('createEmailParams', () => {
    it('should return ses email params', () => {
      const { html, text } = createEmailBody({ fullName, email, message })
      const actual = createEmailParams({ html, text })
      const expected = {
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
      expect(actual).toStrictEqual(expected)
    })
  })
})
