var Generator = require("yeoman-generator");
var path = require("path");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // name of the app based on the directory name generated by React Native
    this.name = process.cwd().split(path.sep).pop();

    this.argument("component", { type: String, required: true });
  }

  writing() {
    var component = this.options.component;

    // create entry points for Android and iOS
    this.fs.copyTpl(
      this.templatePath("index.tsx"),
      this.destinationPath(`App/Components/${component}/index.tsx`),
      { name: this.name, component: component }
    );

    this.fs.copyTpl(
      this.templatePath("styles.ts"),
      this.destinationPath(`App/Components/${component}/styles.ts`),
      { name: this.name, component: component }
    );

    this.fs.copyTpl(
      this.templatePath("test.tsx"),
      this.destinationPath(`App/Components/${component}/index.test.tsx`),
      { name: this.name, component: component }
    );
  }
};
