# grunt-functional

Run self-hosted functional tests through casperjs. 

This task will spin up your app on the host and port specified in your configuration and run your functional tests.

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

1. [Install CasperJS](http://casperjs.org/installation.html)
2. Install and configure [grunt-casperjs](https://github.com/ronaldlokers/grunt-casperjs) with: `npm install grunt-casperjs`

    ```javascript
      casperjs: {
        files: ['test/functional/**/*.js']
      }
    ```
3. Install and configure grunt-functional with: `npm install grunt-functional`

    ```javascript
      grunt.loadNpmTasks('grunt-functional');
    ```
4. Add your functional tests to your project's "test/functional" directory.
5. Add the following to your configuration:

    ```javascript
      server: {
        base: 'app'
      },
      functional_tests: {
        hostname: 'localhost',
        port: 35729,
      }
    ```

6. Run `grunt functional` and your functional tests will run on the host and port specified in your configuration.

## Release History
- 0.2.0 - Fixed grunt/yeoman compatibility. Yeoman is using an alpha version of grunt which expected Gruntfile.js. Added a server provider that doesn't depend on Yeoman.
- 0.1.1 - Initial Release.

## License
Copyright (c) 2012 Caige Nichols "caiges"  
Licensed under the MIT license.
