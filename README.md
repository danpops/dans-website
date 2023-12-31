# dans-website

Welcome to my website repository! It is a React Next.js application that showcases my portfolio with a nostalgic 90s website aesthetic.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Integration Tests](#integration-tests)
- [Folder Structure](#folder-structure)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/danpops/dans-website.git
```

2. Change into the project directory:

```
cd dans-website
```

3. Install dependencies:

```
yarn install
```

## Scripts

### yarn dev

Starts the development server.

```
yarn dev
```

Open http://localhost:3000 to view the app in your browser.

### yarn build

Builds the application for production.

```
yarn build
```

### yarn start

Starts the built application.

```
yarn start
```

### yarn test:int

Runs integration tests using [Cucumber](https://cucumber.io/) and [Puppeteer](https://pptr.dev/).

```
yarn test:int
```

## Integration Tests

Integration tests are located in the tests folder. These tests are implemented using Cucumber and Puppeteer to ensure the functionality of the application.

To run the integration tests, use the following command:

```
yarn test:int
```

## Folder Structure

The project follows the structure below:

- `/src`: Source code of the application.

  - `/components`: Reusable React components.
  - `/pages`: Next.js pages.
  - `/assets`: Text, images, gifs.
  - `/design`: Fonts, device breakpoints, and colors.

Feel free to explore each folder for additional details and customizations.
