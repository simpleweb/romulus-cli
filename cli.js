#!/usr/bin/env node
const program = require("commander");
const colors = require("colors");
const yeoman = require("yeoman-environment");
const package = require("./package.json");
const env = yeoman.createEnv();

// register yeoman generators
env.register(require.resolve("./generators/base"), "react-native:base");
env.register(
  require.resolve("./generators/component"),
  "react-native:component"
);
env.register(require.resolve("./generators/reducer"), "react-native:reducer");
env.register(require.resolve("./generators/screen"), "react-native:screen");

// set the package version
program.version(package.version);

// CLI commands
program
  .command("init")
  .alias("base")
  .description("Initialises a new React Native project")
  .action(() => {
    env.run("react-native:base");
  });

program
  .command("component [name]")
  .description("Creates a new stateless component")
  .option("--stateful", "Create a stateful component")
  .action((component, cmd) => {
    if (!component) {
      program.help(() =>
        colors.red("Please make sure you pass a component name")
      );
    }
    env.run(`react-native:component ${component}`, {
      stateful: cmd.stateful
    });
  });

program
  .command("reducer [name]")
  .description("Creates a new reducer and set of actions")
  .action(reducer => {
    if (!reducer) {
      program.help(() =>
        colors.red("Please make sure you pass a reducer name")
      );
    }
    env.run(`react-native:reducer ${reducer}`);
  });

program
  .command("screen [name]")
  .description("Creates a new screen")
  .action(screen => {
    if (!screen) {
      program.help(() => colors.red("Please make sure you pass a screen name"));
    }
    env.run(`react-native:screen ${screen}`);
  });

// output help if no option passed
if (process.argv.slice(2).length === 0) {
  program.outputHelp();
}

program.parse(process.argv);
