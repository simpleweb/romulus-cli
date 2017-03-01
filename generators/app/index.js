var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  end() {
    this.log('Oops! There is no generator here.');
    this.log('If you’re creating a new app from scratch please run:');
    this.log('react-native init <ProjectName> && cd <ProjectName>');
    this.log('You can then run any of the sub generators inside your project.');
  }
};
