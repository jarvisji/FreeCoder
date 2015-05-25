module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'client/**/*.js', 'test/**/*.js'],
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
