# Strava Goal Setter Frontend

Strava Goal Setter Frontend was created by me to track my summer biking and walking goals. This application works in conjunction with the [API](https://github.com/rkubapl/strava-api) to fetch and display your activity data.

## Deployment Instructions

To deploy the Strava Goal Setter Frontend, please ensure you have the following prerequisites set up:
- Set up the [API](https://github.com/rkubapl/strava-api/) to handle backend functionality.

To deploy the web app, follow the instructions provided by [this guide]([https://facebook.github.io/create-react-app/docs/deployment). This guide will walk you through the process of deploying a production-ready version of the app.

For my own deployment, I prefer using [Cloudflare Pages](https://pages.cloudflare.com/). You can find a [detailed guide on how to deploy the app using Cloudflare Pages here](https://developers.cloudflare.com/pages/get-started/guide/).

Don't forget to set up the environment variable `REACT_APP_API_URL` with your API URL:
```md
REACT_APP_API_URL=https://strava-api.rkubapl.workers.dev
```

## License

The Strava Goal Setter Frontend is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). Feel free to modify and use it according to your needs.
