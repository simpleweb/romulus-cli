# <%= name %>

- [Installation](#installation)
  - [Setup your environment](#setup-your-environment)
  - [Setup iOS certificates](#setup-ios-certificates)
    - [Development](#development)
    - [Production](#production)
  - [Install dependencies](#install-dependencies)
  - [Start the development server](#start-the-development-server)
  - [Running the app using React Native CLI](#running-the-app-using-react-native-cli)
- [Tests](#tests)
- [TypeScript](#typescript)
- [Deep Linking](#deep-linking)
- [App Icons](#app-icons)
- [Release and deployment](#release-and-deployment)
  - [Building for testing](#building-for-testing)
    - [iOS](#ios)
    - [Android](#android)
  - [Versioning](#versioning)
  - [iOS](#ios-1)
  - [Post-release](#post-release)

<hr/>

## Installation

Before installation, please make sure you have the latest version of [Yarn](https://yarnpkg.com/lang/en/) installed.

### Setup iOS certificates

Please note,

- You should have your own development certificate.
- Save any certificates, p12 files etc... to [our developer repo](https://github.com/simpleweb/developer.apple.com).
- "<%= name %> - iOS Development" provisioning can and should be edited.
- For release, we use a shared distribution certificate "<%= name %>", this should not be edited, deleted or regenerated.

#### Development

[Follow this guide](https://github.com/simpleweb/iOS-Development-For-Teams/blob/master/guide/certificates/ios-app-development.md) to setup your development certificate.

Once your certificate is all setup, head back to the Apple developer portal and edit the existing "<%= name %> - iOS Development" provisioning profile to include your certificate (and any devices you wish to add). Download the new provisioning profile and you should be good to go.

#### Production

Make sure you clone down [our developer repo](https://github.com/simpleweb/developer.apple.com) and double click the `Certificates.p12` from the `<%= nameLower %>/certificates/production/simpleweb` folder.

This is a shared certificate, you **do not** need to generate a new one each time.

After this is installed, please download the "<%= name %> - iOS Distribution" provisioning profile from the Apple developer site.

### Install dependencies

Install JavaScript dependencies with `yarn`.

```
$ yarn install
```

### Start the development server

React Native uses a development server to bundle up your code, you'll need this running before launching the app in a simulator.

```
$ yarn run start
```

### Running the app using React Native CLI

You can use the [React Native CLI](https://www.npmjs.com/package/react-native-cli) to easily run the app onto the iOS and Android simulators.

```
$ yarn global add react-native-cli
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
$ yarn run test
$ yarn run test:watch
$ yarn run coverage
```

With Jest, tests can live anywhere within the codebase, the majority however live in the `__tests__` folder at the root of the project. Any folder with the same name or files ending in `.test.js` will also be included when running Jest.

## TypeScript

<%= name %> uses [TypeScript](https://www.typescriptlang.org/) to type check the
app. It is run by `eslint` as a pre-commit hook to make sure no errors get into
commits.

## Deep Linking

To get Deep Linking working, it requires a few additional steps for iOS and Android. The steps can be found on the [react navigation docs](https://reactnavigation.org/docs/en/deep-linking.html).

## App Icons

The source app icons is located in `App/Assets/AppIcon.png`. The icons for Android and iOS are generated with [`rn-toolbox`](https://github.com/bamlab/generator-rn-toolbox). Please refer to their [documentation](https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md) to generate new icons.

Typically though the command should be something along these lines.

```
$ yo rn-toolbox:assets --icon App/Assets/AppIcon.png
```

![<%= name %> App Icon](/App/Assets/AppIcon.png)

## Release and deployment

### Building for testing

Testing builds should be configured to point towards staging and released using Fabric.

To configure the build for staging, please place staging configuration into `.env.staging`.

#### iOS

For iOS, you will need to switch to the "<%= name %> Staging" scheme. This should use the `<%= name %> - iOS Development` provisioning profile. Please make sure everyone’s UUID in the profile you wish to test with. Please refer to [this guide](https://firebase.google.com/docs/app-distribution/ios/distribute-console) for releasing on Firebase App Distribution.

#### Android

For Android, simply build the project using the instructions below and then follow [this guide](https://firebase.google.com/docs/app-distribution/android/distribute-console) for releasing on Firebase App Distribution.

### Versioning

When producing a new build you will need to bump the version number. This is handled more or less automatically through the version in the `package.json`.

For iOS you need to run the following command which automatically updates the XCode project with the version inside the `package.json`. It also increments the build number.

```
$ yarn run bump
```

Android’s version is dynamically generated using it’s Gradle files.

If there's ever any issues with this flow, please [refer to this article](https://medium.com/@andr3wjack/versioning-react-native-apps-407469707661).

### iOS

In XCode build to the "Generic iOS Device" and then archive the build. Building (as opposed to running) will use the "Signing (Release)" profile, the provisioning profile for this must be "<%= name %> - iOS Distribution".

Once archived simply open the Organizer in XCode and upload the build.

### Android

From [https://github.com/simpleweb/developer.apple.com/tree/master/<%= nameLower %>/android](https://github.com/simpleweb/developer.apple.com/tree/master/<%= nameLower %>/android), download the `<%= nameLower %>.keystore` file and place it into `android/app`.

Then take the environment variables from `gradle.properties` and and them into your own properties file located in `~/.gradle/gradle.properties`.

Once these are both setup correctly, go into the `android` directory and run...

```
$ ./gradlew assembleRelease
```

This should leave you with a signed APK located in `android/app/build/outputs/apk/app-release.apk`.

### Post-release

After each build, please create a commit along the lines of "Release 0.1.0" and push it to Github. Following that, [create a release](https://github.com/simpleweb/<%= name %>/releases) and named "v0.1.0", include any release notes and attach both iOS and Android binaries (zipped).
