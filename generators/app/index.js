var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }

  hello() {
    this.log('Hello from the React Native generator');
  }
};
