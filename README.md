# generator-react-native

These generators should be run on _existing_ React Native projects.

## Starting a new project?

First setup a barebones React Native project, make sure it's the latest version too.

```
react-native init MyApp && cd MyApp
```

The next logical step is to install this generator (instructions below) and run the `base` command.

## What does all this stuff do?!

So... there's no documentation just yet, but there are some [resources](#resources) on some of the more complex topics.

## Installation

This generator uses Yeoman, please install it first.

```
npm install -g yo
```

This is not available on `npm` _yet_. So for now, clone the project down and inside the folder run.

```
npm install
npm link
```

You can then run the following commands.

## Commands

First, please create yourself a new React Native project with `react-native init MyApp && cd MyApp` before running any of the generator commands.

### `base`

Base will generate you a new project start point. It includes the following,
* A sensible `README` providing consistent instructions between projects
* `nvm` setup
* Can optionally `init` Git for you
* Router (using `react-native-router-flux`)
* Redux setup
* Redux store that is persisted and restored automatically
* Redux logger
* Launch screen that waits for the store to be restored from the cache
* Prevents Redux actions from being dispatched before the cache is restored
* Environment configuration variables
* Sagas (to handle async tasks like HTTP requests)
* Initial setup for deep linking
* Handy `fetch` wrapper that will log what requests are being made, providing the base URLs from the environment variables
* Pattern to manage components and their styles
* Visual display of your app’s environment while it’s running, this get’s hidden in production
* Automatic versioning of iOS and Android versions based on the `package.json` version.
* Pattern to manage Flow types across the app
* `log` helper to output coloured logs to the debug console
* Logs that get excluded when in production
* Generic app icon that can be processed through a separate generator to handle all your iOS and Android icons
* Simple Styleguide setup
* Example Button component
* Style variables
* Platform specific style variables
* Layout component example to DRY up scene layouts

Please note, follow the "Manual Notes" below after running this command. Hopefully in the future these can be automated.

```
yo react-native:base
```

### `component`

An easy way to scaffold stateless and stateful components.

```
yo react-native:component MyComponent
yo react-native:component MyComponent --stateful
```

### `reducer`

An easy way to scaffold a reducer. It creates the reducer itself and a way to keep organise your associated actions.

```
yo react-native:reducer MyReducer
```

## Manual Notes

### After `react-native:base`

The default `react-native init` now comes with tvOS targets... These add un-needed cruft to the project. Best plan is to open the XCode project, remove the tvOS targets and then delete the files in the project themselves.

Add these scripts to your `package.json`, don't overwrite the "start" script that will already exist though.

```
"scripts": {
  "version": "./bin/version-ios.sh",
  "test": "jest --verbose",
  "coverage": "jest --coverage",
  "test:watch": "npm test -- --watch"
},
```

Add the following to the `[ignore]` section in the `.flowconfig`.

```
; Ignore libraries we don’t want checking
.*/node_modules/react-native-experimental-navigation/.*
.*/node_modules/react-static-container/.*
```

Add the following to your `.gitignore`.

```
# Enviroments
.env
.env.development
.env.staging
.env.live
.env.production
```

Follow the Android version of these instructions to add automatic build numbers.

[https://medium.com/@andr3wjack/versioning-react-native-apps-407469707661#.quhgn05gf](https://medium.com/@andr3wjack/versioning-react-native-apps-407469707661#.quhgn05gf)

## Resources

* [Introduction to Sagas](https://redux-saga.github.io/redux-saga/docs/introduction/BeginnerTutorial.html)
* [A great simple intro to Redux Sagas](https://www.youtube.com/watch?v=msx0Qiu8NxQ&list=PLw7fHewFA6OTyUnLiZ1HQvYdzjp9ARMQw)
* [Intro to Redux](http://redux.js.org/docs/basics/Reducers.html)
* [Flow](https://flowtype.org/)
