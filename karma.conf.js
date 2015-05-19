// Karma configuration
// Generated on Fri May 15 2015 10:55:00 GMT+0800 (中国标准时间)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'client/vendor/jquery/dist/jquery.js',
      'client/vendor/angular/angular.js',
      'client/vendor/angular-resource/angular-resource.js',
      'client/vendor/angular-ui-router/release/angular-ui-router.js',
      'client/vendor/angular-cookies/angular-cookies.js',
      'client/vendor/angular-mocks/angular-mocks.js',
      'client/vendor/angular-ui-tree/dist/angular-ui-tree.js',
      'client/app/**/*.js',
      'client/app/**/*.tpl.html', // for test templates
      'client/common/**/*.js',
      'test/**/*Spec.js'
    ],

    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/app/**/*.tpl.html': ['ng-html2js']
    },

    // refer to https://github.com/karma-runner/karma-ng-html2js-preprocessor
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'client/',
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      moduleName: 'templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
