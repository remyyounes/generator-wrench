'use strict';
var util = require('util');
var path = require('path');
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
      choices: [{
          name: 'Bootstrap: The most popular front-end framework for developing responsive, mobile first projects on the web',
          value: 'includeBootstrap',
          checked: true
      }]
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

      const docPath = "app/views/docs/views/";
      const componentPath = docPath + componentName;


      this.fs.copyTpl(
        this.templatePath('component-example/index.js'),
        this.destinationPath(componentPath + '/index.js'),
        { componentName: componentName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/handler.jsx'),
        this.destinationPath(componentPath + '/handler.jsx'),
        { componentName: componentName }
      );

      this.fs.copyTpl(
        this.templatePath('component-example/views/index/index.js'),
        this.destinationPath(componentPath + '/index/index.js'),
        { componentName: componentName }
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

    projectfiles: function () {
      // this.src.copy('editorconfig', '.editorconfig');
      // this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    // this.installDependencies();
  }
});

module.exports = ReactBoilerplateGenerator;
