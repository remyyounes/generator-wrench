'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ReactBoilerplateGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to Procore\'s wrench generator!'
    ));

    var prompts = [{
      name: 'componentName',
      message: 'What is your component\'s name (PascalCase)?'
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: []
    }];

    this.prompt(prompts, function (props) {
      console.log(props);
      var features = props.features;
      function hasFeature(feat) { return features.indexOf(feat) !== -1; }
      this.componentName = props.componentName;
      this.includeBootstrap = hasFeature('includeBootstrap');
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      const componentName = this.componentName;
      const routeName = componentName
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
      const docPath = 'app/views/docs/views/';
      const componentPath = docPath + routeName;


      this.fs.copyTpl(
        this.templatePath('component-example/index.js'),
        this.destinationPath(componentPath + '/index.js'),
        { componentName, routeName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/handler.jsx'),
        this.destinationPath(componentPath + '/handler.jsx'),
        { componentName, routeName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/views/index/index.js'),
        this.destinationPath(componentPath + '/views/index/index.js'),
        { componentName, routeName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/views/index/handler.jsx'),
        this.destinationPath(componentPath + '/views/index/handler.jsx'),
        { componentName, routeName }
      );


      this.fs.copyTpl(
        this.templatePath('component-example/views/live/index.js'),
        this.destinationPath(componentPath + '/views/live/index.js'),
        { componentName, routeName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/views/live/handler.jsx'),
        this.destinationPath(componentPath + '/views/live/handler.jsx'),
        { componentName, routeName }
      );

    },
  },

});

module.exports = ReactBoilerplateGenerator;
