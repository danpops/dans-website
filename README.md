# dans-website

## Overview

Welcome to my portfolio website! This React Next.js application offers a showcase of my work, blending modern technology with a 90s website aesthetic. Dive into the code to explore best practices in React application development, run it locally, and experience the charm of the 90s web.

### Features

- **Nostalgic 90s Design**: Immerse yourself in a retro web experience with a visually appealing 90s aesthetic.
- **Local Development**: Run the application locally to explore the codebase and discover React best practices.
- **Integration Tests**: Elevate your React project with cool integration tests using Cucumber and Puppeteer.

### Live Deployment

Explore my live website at [danpops.ca](https://danpops.ca) to see the portfolio in action.

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

  - `/cms`: Location for Sanity CMS query, client, and schema files.
  - `/containers`: Dedicated JSX containers for organizing and assembling components into coherent pages. The containers serve as structured compositions of components, facilitating the creation of specific pages.
  - `/components`: Reusable React components.
  - `/design`: Fonts, device breakpoints, and colors.
  - `/hooks`: Custom React hooks used within the applicaiton.
  - `/lib`: API files, etc.
  - `/pages`: Next.js pages.

Feel free to explore each folder for additional details and customizations.
