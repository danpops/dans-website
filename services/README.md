# dans-website services

## Overview

The `dans-website` project utilizes AWS Lambda and Serverless Framework to provide serverless functionality for handling contact form submissions. The primary Lambda function (`notifyByEmail`) receives a POST request and sends an email using AWS SES (Simple Email Service). This `README` provides essential information for developers and contributors to understand, deploy, and maintain the serverless services.

## Prerequisites

- Node.js (>= 18.x)
- Serverless Framework (>= 3.0)
- AWS CLI configured with appropriate permissions
- Yarn (optional, if using the provided packager: yarn)

## Getting Started

1. Clone the repository:

```
git clone https://www.github.com/danpops/dans-website.git
```

2. Navigate to the project directory:

```
cd dans-website/services
```

3. Install dependencies:

```
yarn install
```

4. Deploy the serverless services:

```
yarn deploy:dev
```

## Configuration

### Serverless Framework Configuration

- **`serverless.yml`** contains the Serverless Framework configuration. Customize the provider, functions, and other settings as needed.
- Adjust the region in provider to your desired AWS region.
- Update the IAM role permissions if necessary.

### Environment Variables

- Environment variables can be configured in the **`.env`** file.

```
TO_ADDRESS=
SOURCE_ADDRESS=
```

- Modify **`AWS_ACCESS_KEY_ID`** and **`AWS_SECRET_ACCESS_KEY`** with your AWS credentials.

## AWS SES Configuration

- Ensure that your AWS SES is set up and verified.
- IAM role permissions (**`ses:SendEmail`**) must be granted to the Lambda function.

## Lambda Function

### `notifyByEmail`

- The Lambda function **`notifyByEmail`** handles incoming POST requests to the `/contact` endpoint.
- It is configured to be private, CORS-enabled, and has specific throttling settings.
- Adjust timeout, memorySize, and other function settings in serverless.yml as needed.

## Local Development

- Run the serverless services locally:

```
sls offline start
```

-Test the functionality with a tool like Postman or your preferred HTTP client.

## Plugins

The project utilizes the following Serverless Framework plugins:

- **`serverless-webpack`** for bundling Lambda functions with Webpack.
- **`serverless-offline`** for emulating AWS Lambda and API Gateway locally.
- **`serverless-dotenv-plugin`** for loading environment variables from a .env file.
