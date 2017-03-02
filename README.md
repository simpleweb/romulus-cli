# generator-react-native

## Installation

This generator uses Yeoman, please install it first.

```
npm install -g yo
```

This is not available on `npm` _yet_. So for now, clone the project down and inside the folder run.

```
npm link
```

You can then run the following commands.

## Commands

First, please create yourself a new React Native project with `react-native init MyApp && cd MyApp` before running any of the generator commands.

### `base`

Base will generate you a new project start point. It includes the following,
* Router (using `react-native-router-flux`)
* Launch screen
* Redux setup
* Redux store that is persisted and restored automatically
* Redux logger
* Environment configuration variables
* Sagas (to handle async tasks like HTTP requests)
* Initial setup for deep linking
* Handy `fetch` wrapper that will log what requests are being made
* Pattern to manage components
* Environment display, stops you running your app in development mode when building for release
* Automatic versioning of iOS and Android versions based on the `package.json` version.

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
