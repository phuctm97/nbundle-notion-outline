# Notion Outline

Show floating sticky outline (table of contents) for Notion pages, powered by nbundle.

> This is an [nbundle-powered][nbundle for developers] [Notion app][nbundle] bootstrapped with [create-notion-app].

## Prerequisite

To develop this app, make sure to have the following products installed:

- [Node.js] 14+

- [Yarn] 1.22+

- [nbundle App Store][nbundle] for browsers and/or desktop apps

Open your terminal, go to the project directory, and run the following command to install dependencies:

```shell
yarn install
```

## Develop

Open your terminal, go to the project directory, and run the following command:

```shell
yarn develop --target chrome
```

The nbundle CLI will open Google Chrome with the app automatically loaded in development mode (hot reloading, error reporting, sourcemap, etc).

Change the `--target` parameter to `edge` or `firefox` if you want to develop on Microsoft Edge or Firefox instead of Google Chrome.

You can edit the app by modifying [`app/index.jsx`](app/index.jsx). The app auto-updates as you edit the file.

## Ship

Open your terminal, go to your project directory, and run the following command:

```shell
yarn ship
```

The nbundle CLI will ask you to log into your [nbundle for Developers] account if you haven't already, then build & publish the app to all supported platforms. Depending on the target platform, the app may be pending for review & approval.

## Learn

To learn more about [nbundle] and [nbundle for Developers], take a look at the following resources:

- [nbundle App Store](https://nbundle.com) - get the App Store to see how Notion users discover and use apps.

- [nbundle Documentation](https://developers.nbundle.com) - learn about nbundle features, architecture, and APIs.

- [nbundle API Reference](https://developers.nbundle.com/docs/api) - see a complete reference of the nbundle APIs.

<!-- Links -->

[node.js]: https://nodejs.org
[yarn]: https://classic.yarnpkg.com
[nbundle]: https://www.nbundle.com
[nbundle for developers]: https://developers.nbundle.com
[create-notion-app]: https://www.github.com/nbundle/create-notion-app
