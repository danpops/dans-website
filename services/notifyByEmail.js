const aws = require('aws-sdk')
const { createEmailBody, createEmailParams } = require('./utils/email')

module.exports.lambda = handler

async function handler (event, context) {
  const ses = new aws.SES()
  const eventBody = JSON.parse(event.body)
  const fullName = eventBody.fullName
  const email = eventBody.email
  const message = eventBody.message
  const details = { fullName, email, message }
  const emailBody = createEmailBody(details)
  const emailParams = createEmailParams(emailBody)
  const response = ses
    .sendEmail(emailParams)
    .promise()
    .then(() => {
      const statusCode = 200
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
      const body = JSON.stringify({ success: true })
      return { statusCode, headers, body }
    })
    .catch(() => ({ statusCode: 400 }))
  return response
}
