# ⚛️ romulus-cli &middot; [![npm version](https://img.shields.io/npm/v/romulus-cli.svg)](https://www.npmjs.com/package/romulus-cli) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/simpleweb/romulus-cli/Tests) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md#sending-a-pull-request)

`romulus` is a tool designed to **provide structure** and a **set of patterns**
for React Native applications.

It should help eliminate the time you spend bootstrapping each project and
give you consistency between your application builds.

While this comes with some opinion, there’s no overarching framework on top of
React Native; it’s purely a collection of commonly used modules and some sensible
architecture to get you or your team off the ground.

## What does it do?

- [Features](#features) - adds a set of commonly required features (e.g. Redux setup,
  offline storage, environment variables and more) by taking advantage of great
  community driven packages
- [Structure](#structure) - provides a sensible structure for your applications that helps bring
  consistency within your team or just between your own applications
- [Scaffolding](#documentation) - makes it easy to scaffold new components, reducers
  and scenes that follow the same style and structure

## Example application

[View the example application](https://github.com/simpleweb/romulus-example) created with Romulus
to get an idea of what `romulus init` does. The application is ready to be cloned down and ran
straight away onto a device or simulator.

## Installation

```
npm install -g romulus-cli
```

```
yarn global add romulus-cli
```

Don’t want to install anything? You can run the commands directly using
`npx` (available with `npm@5.2.0`).

```
npx romulus-cli init
```

## Getting started

Create a new React Native project using their CLI tool.

```
npx react-native init MyApp --template react-native-template-typescript
cd MyApp
```

> You need to ensure you have the correct cli installed for this command to succeed.
>
> ```
> npm uninstall -g react-native-cli
> npm i -g @react-native-community/cli
> ```

Once this is complete, simply run the main generator command. This will rework
and add to the files that are generated by React Native and give you something
more akin to what you might find with `rails new`.

```
romulus init
```

## Features

- A sensible `README` providing consistent instructions between projects
- TypeScript support
- Router using `react-navigation` (v5)
- Redux setup (optional)
  - Store is persisted using `redux-persist`
  - Helpful state changes logged in the debugger using `redux-logger`
  - Actions are prevented from being dispatched before the cache is restored
- `react-query` setup (optional)
  - Makes it easy to get setup with `react-query`
  - Replaces Saga and Redux architecture
- UI niceities
  - CSS-in-JS support for `styled-components`
  - Start to a styleguide to list your components
  - Example Button component
  - Layout component example to DRY up screen layouts
  - Pattern to organise components and their styles
- Helpful utilities
  - `log` helper to output coloured logs to the debug console
  - Visual display of your app’s environment while it’s running, this gets hidden
    in production
- Optional support for different locales using `react-native-i18n`
- Environment variables available in JavaScript, Objective C and Java using
  `react-native-config`
- Sagas (to handle async tasks like HTTP requests) using `redux-saga` (optional, not available with `react-query`)
- Initial setup for deep linking
- Requests are set up to be handled with `axios` with clear logging in the
  debugger provided
- Automatic versioning of iOS and Android versions based on the `package.json`
  version
- Generic app icon that can be processed through a separate generator to handle
  all your iOS and Android icons

### Structure

After running the `base` command, on top of the features above your application
will then receive this structure.

```
App/
├── @types/
│   └── index.d.ts
├── Actions/
│   ├── App.ts
│   └── index.ts
├── Assets/
│   └── AppIcon.png
├── Components/
│   ├── App/
│   │   └── index.tsx
│   ├── Button/
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Layout/
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Text/
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── Utilities/
│   │   └── Environment/
│   │       ├── index.tsx
│   │       └── styles.ts
│   └── Router.tsx
├── Config/
│   ├── Locales/
│   │   └── en.json
│   └── index.ts
├── Helpers/
│   ├── Translations.ts
│   └── Log.ts
├── Reducers/
│   ├── App.ts
│   └── index.ts
├── Sagas/
│   ├── index.ts
│   └── RequestExample.ts
├── Screens/
│   ├── index.ts
│   ├── Main.tsx
│   └── Styleguide.tsx
├── Services/
│   └── API/
│       ├── index.ts
│       └── logging.ts
├── Store/
│   ├── Middleware/
│   │   ├── Buffer.ts
│   │   ├── index.ts
│   │   ├── Logger.ts
│   │   └── Saga.ts
│   └── index.ts
├── Theme/
│   └── index.js
├── index.tsx
└── Theme.ts
```

## Documentation

- [Scaffolding](docs/commands.md)

## Manual Notes

### After `romulus init`

Follow the Android version of these instructions to add automatic build numbers.

[https://medium.com/@andr3wjack/versioning-react-native-apps-407469707661#.quhgn05gf](https://medium.com/@andr3wjack/versioning-react-native-apps-407469707661#.quhgn05gf)

## Resources

- [Introduction to Sagas](https://redux-saga.github.io/redux-saga/docs/introduction/BeginnerTutorial.html)
- [A great simple intro to Redux Sagas](https://www.youtube.com/watch?v=msx0Qiu8NxQ&list=PLw7fHewFA6OTyUnLiZ1HQvYdzjp9ARMQw)
- [Intro to Redux](http://redux.js.org/docs/basics/Reducers.html)
- [TypeScript](https://www.typescriptlang.org/)
