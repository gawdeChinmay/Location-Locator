module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: ['./src/*.js', './src/*.css', './*.html'],
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: {
            path: 'public/',
            options:{
              index: 'index.html'
            }
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['connect','watch']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-connect');
}