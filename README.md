# Performance analytics dashboard

Performance analytics dashboard is an web app that renders collected performance metrics datas in a visualized way.

What does it render ?

- [TTFB (Time to first byte)]('https://developer.mozilla.org/en-US/docs/Glossary/time_to_first_byte')
- [FCP (First contentful paint)]('https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint')
- Dom load
- Window load

The collected datas are shown in charts.
By default dashboard renders datas which are created in last 30 minutes.
However, it has a functionality to fetch datas between specific dates.

## Technologies used

- ViteJS
- ReactJS (TS)
- Material UI
- Testing library
- Browserify
- Jest
- Commitlint

## Code quality

[Eslint]('https://eslint.org/') is used as linter.
[Airbnb's eslint config]('https://www.npmjs.com/package/eslint-config-airbnb') takes the main code quality check role.

Full list of eslint config:

- airbnb
- airbnb/hooks
- airbnb-typescript

## Run Locally

Install dependencies

```bash
  yarn install
```

Run the app

```bash
  yarn start
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

## Deployment

This project has been deployed to the [netlify]('https://www.netlify.com/')

To deploy:

```bash
  yarn deploy
```

To dockerize this project, simply run:

In development env:

```bash
  yarn dockerize-dev
```

In production env:

```bash
  yarn dockerize-prod
  yarn dockerize-prod-up
```

## Demo

https://tfp-perf-analytics-dashboard.netlify.app/
