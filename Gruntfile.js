module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      livereload: {
        files: ['**/*.*'],
        options: {livereload: true}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
