/*
 * grunt-functional
 * http://caiges.github.com/grunt-functional
 *
 * Copyright (c) 2012 caiges
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('functional', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('functional'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('functional', function() {
    return 'functional!!!';
  });

};
