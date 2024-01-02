const aws = require('aws-sdk')

module.exports.lambda = handler

async function handler (event, context) {
  const ses = new aws.SES()
  const emailBody = JSON.parse(event.body)
  const fullName = emailBody.fullName
  const email = emailBody.email
  const message = emailBody.message
  const body = `${fullName} with email address ${email} reached out to you! Their message is:
  ${message}`
  const emailParams = createEmailParams(body)
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
function createEmailParams (body) {
  return {
    Destination: { ToAddresses: [process.env.toAddress] },
    Message: {
      Body: { Text: { Charset: 'UTF-8', Data: body } },
      Subject: {
        Charset: 'UTF-8',
        Data: "Dan's website contact form submission"
      }
    },
    Source: process.env.sourceAddress
  }
}
