# <%= name %>

## Installation

Before installation, please make sure you are using the correct Node version. This project uses `nvm` to manage Node versions, please run `nvm use` to set your Node version to match the required version in the `.nvmrc` file.

If you do not have `nvm` installed, please install it via the [official installation instructions](https://github.com/creationix/nvm#installation), **not** Homebrew.

To make life easier, your shell configuration can [automatically switch Node versions for you](https://github.com/creationix/nvm#zsh).

### Setup your environment

This project utilities a "dotenv" file. Please duplicate the `.env.example` file and fill out your local environment variables.

Production/staging/edge credentials will be store in the wiki and separate env files can be created for these, e.g. `.env.<enviroment>`.

If you're having trouble with the environment variables not updating, please [refer to `react-native-dotenv`’s troubleshooting guide](https://github.com/zetachang/react-native-dotenv#troubleshooting).

### Setup iOS certificates

Please note,
* You should have your own development certificate.
* Save any certificates, p12 files etc... to [our developer repo](https://github.com/simpleweb/developer.apple.com).
* "<%= name %> - iOS Development" provisioning can and should be edited.
* For release, we use a shared distribution certificate "<%= name %>", this should not be edited, deleted or regenerated.

#### Development

[Follow this guide](https://github.com/simpleweb/iOS-Development-For-Teams/blob/master/guide/certificates/ios-app-development.md) to setup your development certificate.

Once your certificate is all setup, head back to the Apple developer portal and edit the existing "<%= name %> - iOS Development" provisioning profile to include your certificate (and any devices you wish to add). Download the new provisioning profile and you should be good to go.

#### Production

Make sure you clone down [our developer repo](https://github.com/simpleweb/developer.apple.com) and double click the `Certificates.p12` from the `<%= nameLower %>/certificates/production/simpleweb` folder.

This is a shared certificate, you __do not__ need to generate a new one each time.

After this is installed, please download the "<%= name %> - iOS Distribution" provisioning profile from the Apple developer site.

### Install dependencies

Install JavaScript dependencies with `npm`.

```
$ npm install
```

### Start the development server

React Native uses a development server to bundle up your code, you'll need this running before launching the app in a simulator.

```
$ npm run start
```

### Running the app using React Native CLI

You can use the [React Native CLI](https://www.npmjs.com/package/react-native-cli) to easily run the app onto the iOS and Android simulators.

```
$ npm install -g react-native-cli
```

Once installed you can then run the app onto each platform’s respective simulator.

```
$ react-native run-ios
$ react-native run-android
```

The iOS version (may) use Pods, and requires to be run via it's Xcode Workspace. If you have build errors with the iOS command above, please open `<%= name %>.xcworkspace` and run your builds from there.

## Tests

This project uses [Jest](https://facebook.github.io/jest/) for testing. You can run the tests once, have Jest continually watch for changes or ask it to produce a coverage report.

```
$ npm run test
$ npm run test:watch
$ npm run coverage
```

With Jest, tests can live anywhere within the codebase, the majority however live in the `__tests__` folder at the root of the project. Any folder with the same name or files ending in `.test.js` will also be included when running Jest.

## Flow

<%= name %> uses [Flow](https://flowtype.org/) to type check the app. If there are missing definitions for external libraries (AKA, you receive lots of Flow errors when using 3rd party code) you can use [`flow-typed`](https://flowtype.org/docs/third-party.html) to fill in any missing gaps.

It’s worth running the update command every so often to keep things in check.

```
$ flow-typed update
```

## App Icons

The source app icons is located in `App/Assets/AppIcon.png`. The icons for Android and iOS are generated with [`rn-toolbox`](https://github.com/bamlab/generator-rn-toolbox). Please refer to their [documentation](https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md) to generate new icons.

Typically though the command should be something along these lines.

```
$ yo rn-toolbox:assets --icon App/Assets/AppIcon.png
```

![<%= name %> App Icon](/App/Assets/AppIcon.png)

## Release and deployment

### Versioning

When producing a new build you will need to bump the version number. This is handled more or less automatically through the version in the `package.json`.

For iOS you need to run the following command which automatically updates the XCode project with the version inside the `package.json`. It also increments the build number.

```
$ npm run version
```

Android’s version is dynamically generated using it’s Gradle files.

If there's ever any issues with this flow, please [refer to this article](https://medium.com/@andr3wjack/versioning-react-native-apps-407469707661).

### iOS

For now, please come speak to Ben. 😃

### Android

From [https://github.com/simpleweb/developer.apple.com/tree/master/<%= nameLower %>/android](https://github.com/simpleweb/developer.apple.com/tree/master/<%= nameLower %>/android), download the `<%= nameLower %>.keystore` file and place it into `android/app`.

Then take the environment variables from `gradle.properties` and and them into your own properties file located in `~/.gradle/gradle.properties`.

Once these are both setup correctly, go into the `android` directory and run...

```
$ ./gradlew assembleRelease
```

This should leave you with a signed APK located in `android/app/build/outputs/apk/app-release.apk`.
