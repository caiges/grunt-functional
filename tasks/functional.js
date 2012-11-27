/*
 * grunt-functional
 * http://caiges.github.com/grunt-functional
 *
 * Copyright (c) 2012 caiges
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Run our functional test suite using phantomjs
  grunt.registerTask('functional', 'Run functional tests with phantomjs + casperjs', function() {
    var done = this.async();
    // Options for the server hosting our app
    var opts = {
      open: false,
      port: grunt.config('functional_tests.port') || 35729,
      base: 'app',
      // We don't need the livereload injection middleware
      inject: false,
      target: 'phantom',
      hostname: grunt.config('functional_tests.hostname') || 'localhost'
    };

    // Spawn the casperjs yeoman task in a child process and then close out the server/end this task
    function runTests() {
      grunt.utils.spawn({cmd: 'yeoman', args: ['casperjs']}, closeServer);
    }

    // Start a server hosting our app
    var server = grunt.helper('server', opts, runTests);

    function closeServer(error, result, code) {
      if(error) {
        grunt.log.writeln(error);
      }
      grunt.log.writeln(result);
      // Close the server
      server.close();
      // End the task
      done(true);
    }
  });

};
