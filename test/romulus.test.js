require('colors');
const path = require('path');
const spawn = require('cross-spawn');
const rimraf = require('rimraf');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

// This may need refining to something more sensible
const CREATE_TIMEOUT = 100000;
const CLEAN_TIMEOUT = 10000;

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
        i18nSupport: false,
      }).then(() => {
        assert.file([
          '.env',
          '.env.production',
          '.env.staging',
          'README.md',
          'bin/bump-ios.sh',
          'App/index.tsx',
          'App/Router.ts',
          'App/Screens/index.ts',
          'App/Screens/Main.tsx',
          'App/Screens/Styleguide.tsx',
          'App/Components/App/index.tsx',
          'App/Components/Button/index.tsx',
          'App/Components/Button/styles.ts',
          'App/Components/Layout/index.tsx',
          'App/Components/Layout/styles.ts',
          'App/Components/Text/index.tsx',
          'App/Components/Text/styles.ts',
          'App/Components/Utilities/Environment/index.tsx',
          'App/Components/Utilities/Environment/styles.ts',
          'App/Store/index.ts',
          'App/Store/Middleware/Buffer.ts',
          'App/Store/Middleware/index.ts',
          'App/Store/Middleware/Saga.ts',
          'App/Store/Middleware/Logger.ts',
          'App/Reducers/App.ts',
          'App/Reducers/index.ts',
          'App/Actions/App.ts',
          'App/Actions/index.ts',
          'App/Sagas/index.ts',
          'App/Sagas/RequestExample.ts',
          'App/Services/API/index.ts',
          'App/Services/API/logging.ts',
          'App/Helpers/Log.ts',
          'App/Config/index.ts',
          'App/Theme.ts',
          'App/Assets/AppIcon.png',
          '@types/index.d.ts',
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
