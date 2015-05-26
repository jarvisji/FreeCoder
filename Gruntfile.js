module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'client/**/*.js', 'common/**/*.js', 'server/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        },
        reporter: require('jshint-stylish'),
        reporterOutput: 'jshint-report.txt'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    clean: ['dist', '.tmp'],
    copy: {
      client: {
        expand: true,
        src: ['package.json', 'client/**', '!client/vendor/**', '!client/assets/ace/**', '!client/assets/css/**', 'server/**', 'common/**'],
        dest: 'dist'
      }
    },
    useminPrepare: {
      html: 'dist/client/index.html'
    },
    usemin: {
      html: ['dist/client/index.html']
    },
    concat: {
      dist: {
        files: [{
          dest: '.tmp/concat/js/3rd.js',
          src: [
            'client/vendor/angular-resource/angular-resource.js',
            'client/vendor/angular-cookies/angular-cookies.js',
            'client/vendor/angular-ui-tree/dist/angular-ui-tree.js',
          ]
        }, {
          dest: '.tmp/concat/js/app.js',
          src: [
            'client/common/services/lb-services.js',
            'client/common/services/i18n-messages.js',
            'client/common/services/fcUtils.js',
            'client/app/app.js',
            'client/common/**/*.js',
            'client/app/**/*.js'
          ]
        }]
      }
    },
    uglify: {
      dist: {
        files: [{
          dest: 'dist/client/assets/js/3rd.min.js',
          src: ['.tmp/concat/js/3rd.js']
        }, {
          dest: 'dist/client/assets/js/app.min.js',
          src: ['.tmp/concat/js/app.js']
        }]
      }
    },
    cssmin: {
      dist: {
        files: [{
          'dist/client/assets/css/ace.min.css': ['client/assets/css/ace*.css']
        }, {
          'dist/client/assets/css/app.min.css': ['client/vendor/angular-ui-tree/dist/angular-ui-tree.min.css', 'client/assets/css/styles.css']
        }]
      }
    },
    rev: {
      files: {
        src: ['dist/client/assets/**/*.{js,css}']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['jshint', 'copy', 'useminPrepare', 'concat:dist', 'uglify:dist', 'cssmin:dist', 'rev', 'usemin']);

};
