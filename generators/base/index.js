const writePkg = require("write-pkg");
const readPkg = require("read-pkg");
const deepExtend = require("deep-extend");
var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // name of the app based on the directory name generated by React Native
    this.name = this.appname;
  }

  prompting() {
    return this.prompt([
      {
        type: "confirm",
        name: "i18nSupport",
        message: "Do you want i18n support?",
        default: true,
      },
    ]).then((answers) => {
      this.i18nSupport = answers.i18nSupport;
    });
  }

  writing() {
    // create entry points for Android and iOS
    this.fs.copyTpl(
      this.templatePath("index.js"),
      this.destinationPath("index.js"),
      { name: this.name }
    );

    // copy Prettier config
    this.fs.copyTpl(
      this.templatePath(".prettierrc.js"),
      this.destinationPath(".prettierrc.js")
    );

    // copy Estlint config
    this.fs.copyTpl(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );

    this.fs.copyTpl(
      this.templatePath("jest.config.js"),
      this.destinationPath("jest.config.js")
    );

    // remove default App generated by RN
    this.fs.delete("App.tsx");

    // remove default test
    this.fs.delete("__tests__/App-test.tsx");

    // copy root app file that the entry points use
    this.fs.copyTpl(
      this.templatePath("App/index.tsx"),
      this.destinationPath("App/index.tsx"),
      { name: this.name }
    );

    // copy router
    this.fs.copyTpl(
      this.templatePath("App/Router.tsx"),
      this.destinationPath("App/Router.tsx"),
      { name: this.name }
    );

    // copy screens
    this.fs.copyTpl(
      this.templatePath("App/Screens"),
      this.destinationPath("App/Screens"),
      {
        name: this.name,
        i18nSupport: this.i18nSupport,
      }
    );

    // copy components
    this.fs.copyTpl(
      this.templatePath("App/Components"),
      this.destinationPath("App/Components"),
      { name: this.name }
    );

    // copy store
    this.fs.copyTpl(
      this.templatePath("App/Store/index.ts"),
      this.destinationPath("App/Store/index.ts"),
      { name: this.name }
    );

    // copy store middleware
    this.fs.copyTpl(
      this.templatePath("App/Store/Middleware"),
      this.destinationPath("App/Store/Middleware"),
      { name: this.name }
    );

    // copy reducers
    this.fs.copyTpl(
      this.templatePath("App/Reducers"),
      this.destinationPath("App/Reducers"),
      { name: this.name, reducers: ["App"] }
    );

    // copy actions
    this.fs.copyTpl(
      this.templatePath("App/Actions"),
      this.destinationPath("App/Actions"),
      { name: this.name }
    );

    // copy sagas
    this.fs.copyTpl(
      this.templatePath("App/Sagas"),
      this.destinationPath("App/Sagas"),
      { name: this.name }
    );

    // copy services
    this.fs.copyTpl(
      this.templatePath("App/Services"),
      this.destinationPath("App/Services"),
      { name: this.name }
    );

    // copy helpers
    this.fs.copyTpl(
      this.templatePath("App/Helpers/Log.ts"),
      this.destinationPath("App/Helpers/Log.ts"),
      { name: this.name }
    );

    // copy theme
    this.fs.copyTpl(
      this.templatePath("App/Theme.ts"),
      this.destinationPath("App/Theme.ts")
    );

    // copy config
    this.fs.copyTpl(
      this.templatePath("App/Config/index.ts"),
      this.destinationPath("App/Config/index.ts"),
      { name: this.name }
    );

    if (this.i18nSupport) {
      this.fs.copyTpl(
        this.templatePath("App/Helpers/Translations.ts"),
        this.destinationPath("App/Helpers/Translations.ts"),
        { name: this.name }
      );

      this.fs.copyTpl(
        this.templatePath("App/Config/Locales"),
        this.destinationPath("App/Config/Locales"),
        { name: this.name }
      );
    }

    // copy default .env
    this.fs.copyTpl(this.templatePath(".env"), this.destinationPath(".env"), {
      env: "development",
      api_url: "http://localhost:3000",
      storage_prefix: "development",
    });
    this.fs.copyTpl(
      this.templatePath(".env"),
      this.destinationPath(".env.example"),
      {
        env: "development",
        api_url: "http://localhost:3000",
        storage_prefix: "development",
      }
    );
    this.fs.copyTpl(
      this.templatePath(".env"),
      this.destinationPath(".env.staging"),
      {
        env: "staging",
        api_url: "http://localhost:3000",
        storage_prefix: "staging",
      }
    );
    this.fs.copyTpl(
      this.templatePath(".env"),
      this.destinationPath(".env.production"),
      {
        env: "production",
        api_url: "http://localhost:3000",
        storage_prefix: "production",
      }
    );

    this.fs.copy(
      this.templatePath("App/Assets"),
      this.destinationPath("App/Assets")
    );

    this.fs.copy(
      this.templatePath("utilities"),
      this.destinationPath("utilities")
    );

    this.fs.copy(
      this.templatePath("__mocks__"),
      this.destinationPath("__mocks__")
    );

    // copy TypeScript types
    this.fs.copyTpl(
      this.templatePath("@types"),
      this.destinationPath("@types"),
      { name: this.name }
    );

    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      { name: this.name, nameLower: this.name.toLowerCase() }
    );

    //  copy shell scripts
    this.fs.copyTpl(
      this.templatePath("bin/bump-ios.sh"),
      this.destinationPath("bin/bump-ios.sh"),
      { name: this.name }
    );

    // merge the two package json files
    const currentPackage = readPkg.sync();

    writePkg.sync(
      deepExtend(currentPackage, {
        private: true,
        scripts: {
          pretty:
            "prettier --config .prettierrc.js --write 'App/**/*.{ts,tsx,js}'",
          lint: "eslint --fix './App/**/*.{ts,tsx,js}'",
          bump: "./bin/bump-ios.sh",
          test: "jest --verbose",
          coverage: "jest --coverage",
          "test:watch": "npm test -- --watch",
        },
        "lint-staged": {
          "App/**/*.{ts,tsx,js}": [
            "prettier --config .prettierrc.js --write",
            "eslint --plugin tsc --rule 'tsc/config: [2, {configFile: \"./tsconfig.json\"}]'",
          ],
        },
        husky: {
          hooks: {
            "pre-commit": "lint-staged",
          },
        },
      })
    );
  }

  install() {
    const reactNavigation = [
      "@react-navigation/native",
      "@react-navigation/stack",
      "react-native-reanimated",
      "react-native-gesture-handler",
      "react-native-screens",
      "react-native-safe-area-context",
      "@react-native-community/masked-view",
    ];

    this.yarnInstall([
      "@react-native-community/async-storage",
      "axios",
      "https://github.com/luggit/react-native-config#master",
      ...(this.i18nSupport ? ["react-native-i18n"] : []),
      "react-redux",
      "redux",
      "redux-action-buffer",
      "redux-logger",
      "redux-persist",
      "redux-saga",
      "styled-components",
      ...reactNavigation,
    ]);

    this.yarnInstall(
      [
        "@testing-library/react-native",
        "eslint",
        "babel-eslint",
        "prettier@1.19.1",
        "husky",
        "lint-staged",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "eslint-config-xo",
        "eslint-plugin-react",
        "eslint-plugin-react-native",
        "eslint-plugin-tsc",
        "jest",
        "jest-styled-components",
      ],
      {
        dev: true,
      }
    );
  }

  end() {
    this.log("Installing Pods...");
    this.spawnCommandSync("npx", ["pod-install"]);

    this.log("Running Prettier...");
    this.spawnCommandSync("yarn", ["run", "pretty"]);

    this.log("Update ignore");
    this.spawnCommandSync(
      "python",
      [`${this.templatePath("bin")}/git-ignore.py`],
      {
        cwd: this.destinationPath(),
      }
    );

    this.log("Creating Android environments");
    this.spawnCommandSync(
      "python",
      [`${this.templatePath("bin")}/react-native-config.py`],
      {
        cwd: this.destinationPath(),
      }
    );

    this.log("Creating iOS Schemes");
    this.spawnCommandSync(
      "python",
      [`${this.templatePath("bin")}/create-schemes.py`, this.name],
      {
        cwd: this.destinationPath(),
      }
    );

    this.log("Setup complete!");
    this.log("Please refer to the post-install notes");
    this.log(
      "https://github.com/simpleweb/generator-react-native#after-react-nativebase"
    );
  }
};
