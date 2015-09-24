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
      message: 'What is your component\'s name ?'
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
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
      const componentName = this.componentName.toLowerCase();

      const docPath = 'app/views/docs/views/';
      const componentPath = docPath + componentName;
      const routeName = componentName
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();


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
        this.destinationPath(componentPath + '/index/index.js'),
        { componentName, routeName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/views/index/handler.jsx'),
        this.destinationPath(componentPath + '/index/handler.jsx'),
        { componentName: componentName }
      );


      this.fs.copyTpl(
        this.templatePath('component-example/views/live/index.js'),
        this.destinationPath(componentPath + '/live/index.js'),
        { componentName: componentName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/views/live/handler.jsx'),
        this.destinationPath(componentPath + '/live/handler.jsx'),
        { componentName: componentName }
      );


    },
  },

});

module.exports = ReactBoilerplateGenerator;
