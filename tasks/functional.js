/*
 * grunt-functional
 * http://caiges.github.com/grunt-functional
 *
 * Copyright (c) 2012 Caige Nichols "caiges"
 * Licensed under the MIT license.
 */

var connect = require('connect'),
    fs = require('fs'),
    path = require('path');

module.exports = function(grunt) {

  // Run our functional test suite using phantomjs
  grunt.registerTask('functional', 'Run functional tests with phantomjs + casperjs', function() {
    var done = this.async();
    // Options for the server hosting our app
    var opts = {
      base: grunt.config('server.base'),
      hostname: grunt.config('functional_tests.hostname') || 'localhost',
      port: grunt.config('functional_tests.port') || 35729
    };

    // Spawn the casperjs grunt task in a child process and then close out the server/end this task.
    // Note: Yeoman uses an alpha version of grunt which expects Grunfile.js instead of grunt.js.
    function runTests() {
      fs.exists('Gruntfile.js', function(exists) {
        if(exists) {
          grunt.utils.spawn({cmd: 'grunt', args: ['--config', 'Gruntfile.js', 'casperjs']}, closeServer);
        } else {
          grunt.utils.spawn({cmd: 'grunt', args: ['casperjs']}, closeServer);
        }
      });
    }

    // Start a server hosting our app
    var server = grunt.helper('functional', opts, runTests);

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

grunt.registerHelper('functional', function(opts, cb) {
    cb = cb || function() {};
    console.log(cb);
    var middleware = [];

    // Serve static files.
    middleware.push(connect.static(opts.base));

    return connect.apply(null, middleware)
      .on('error', function( err ) {
        if ( err.code === 'EADDRINUSE' ) {
          return this.listen(0); // 0 means random port
        }

        // not an EADDRINUSE error, buble up the error
        cb(err);
      })
      .listen(opts.port, function() {
        var port = this.address().port;

        // Start server.
        grunt.log
          .subhead( 'Starting static web server on port '.yellow + String( port ).red )
          .writeln( '  - ' + path.resolve(opts.base) );

        cb(null, port);
      });
  });

};
