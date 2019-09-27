require('colors');
const path = require('path');
const spawn = require('cross-spawn');
const rimraf = require('rimraf');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

// This may need refining to something more sensible
const CREATE_TIMEOUT = 100000;
const CLEAN_TIMEOUT = 5000;

const appName = 'SimpleTest';
const screenIndexComponentName = 'IndexComponent';
const screenIndexContainerName = 'IndexContainer';
const componentStatefulName = 'ComponentStateful';
const componentStatelessName = 'ComponentStateless';
const reducerName = 'SimpleReducer';

function createProject() {

  console.log(`Creating a React Native project:`.yellow, `react-native init ${appName}`.green);
  console.log("");

  spawn.sync('react-native', ['init', appName], {
    cwd: __dirname,
    stdio: 'inherit',
  });

  console.log("");
  console.log(`✅  React Native project setup!`.green);
  console.log("");
}

createProject();

describe('Romulus Test', () => {

  // No fat arrows here, as we want to override the timeout
  after(function(done) {
    this.timeout(CLEAN_TIMEOUT);

    rimraf(
      path.join(__dirname, appName), () => {

        console.log("");
        console.log(`✅  Clean up complete!`.green);
        console.log("");

        done();
      }
    );
  });

  // No fat arrows here, as we want to override the timeout
  it('installs the base project files', function() {
    this.timeout(CREATE_TIMEOUT);

    return helpers
      .run(path.join(__dirname, '../generators/base'))
      .cd(path.join(__dirname, appName))
      .withOptions({ skipInstall: false })
      .withPrompts({
        appName,
        flowVerison: "0.70.0",
        createGit: false,
        i18nSupport: true
      }).then(() => {
        assert.file([
          '.env',
          '.env.production',
          '.env.staging',
          'README.md',
          'bin/bump-ios.sh',
          'App/index.js',
          'App/Router.js',
          'App/Screens/index.js',
          'App/Screens/Main.js',
          'App/Screens/Styleguide.js',
          'App/Components/App/index.js',
          'App/Components/Button/index.js',
          'App/Components/Button/styles.js',
          'App/Components/Layout/index.js',
          'App/Components/Layout/styles.js',
          'App/Components/Text/index.js',
          'App/Components/Text/styles.js',
          'App/Components/Utilities/Environment/index.js',
          'App/Components/Utilities/Environment/styles.js',
          'App/Store/index.js',
          'App/Store/Middleware/Buffer.js',
          'App/Store/Middleware/index.js',
          'App/Store/Middleware/Saga.js',
          'App/Store/Middleware/Logger.js',
          'App/Reducers/App.js',
          'App/Reducers/index.js',
          'App/Actions/App.js',
          'App/Actions/index.js',
          'App/Sagas/index.js',
          'App/Sagas/RequestExample.js',
          'App/Services/API/index.js',
          'App/Services/API/logging.js',
          'App/Helpers/Log.js',
          'App/Helpers/Translations.js',
          'App/Config/Locales/en.json',
          'App/Config/index.js',
          'App/Theme/index.js',
          'App/Assets/AppIcon.png',
          'App/Types/index.js'
        ]);
      });
  });

  it('creates a screen with a given name with index.js as component', () => {
    return helpers
      .run(path.join(__dirname, '../generators/screen'))
      .cd(path.join(__dirname, appName))
      .withOptions({ skipInstall: false })
      .withArguments([screenIndexComponentName])
      .withPrompts({
        appName,
        type: "index.js as component"
      }).then(() => {
        assert.file([
          `App/Screens/${screenIndexComponentName}/Container.js`,
          `App/Screens/${screenIndexComponentName}/index.js`
        ]);
      });
  });

  it('creates a screen with a given name with index.js as container', () => {
    return helpers
      .run(path.join(__dirname, '../generators/screen'))
      .cd(path.join(__dirname, appName))
      .withOptions({ skipInstall: false })
      .withArguments([screenIndexContainerName])
      .withPrompts({
        appName,
        type: "index.js as container"
      }).then(() => {
        assert.file([
          `App/Screens/${screenIndexContainerName}/${screenIndexContainerName}.js`,
          `App/Screens/${screenIndexContainerName}/index.js`
        ]);
      });
  });

  it('creates a stateful component with a given name', () => {
    return helpers
      .run(path.join(__dirname, '../generators/component'))
      .cd(path.join(__dirname, appName))
      .withOptions({
        skipInstall: false,
        stateful: true
      })
      .withArguments([componentStatefulName])
      .withPrompts({
        appName
      }).then(() => {
        assert.file([
          `App/Components/${componentStatefulName}/index.js`,
          `App/Components/${componentStatefulName}/styles.js`
        ]);
      });
  });

  it('creates a stateless component with a given name', () => {
    return helpers
      .run(path.join(__dirname, '../generators/component'))
      .cd(path.join(__dirname, appName))
      .withOptions({ skipInstall: false })
      .withArguments([componentStatelessName])
      .withPrompts({
        appName
      }).then(() => {
        assert.file([
          `App/Components/${componentStatelessName}/index.js`,
          `App/Components/${componentStatelessName}/styles.js`
        ]);
      });;
  });

  it('creates a reducer with a given name', () => {
    return helpers
      .run(path.join(__dirname, '../generators/reducer'))
      .cd(path.join(__dirname, appName))
      .withOptions({ skipInstall: false })
      .withArguments([reducerName])
      .withPrompts({
        appName
      }).then(() => {
        assert.file([
          `App/Reducers/${reducerName}.js`,
          `App/Actions/${reducerName}.js`
        ]);
      });;
  });
})
