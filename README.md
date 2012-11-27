# grunt-functional

Run self-hosted functional tests through casperjs. 

This task will spin up your app on the host and port specified in your configuration and run your functional tests.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-functional`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-functional');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

1. [Install CasperJS](http://casperjs.org/installation.html)
2. [Install and configure grunt-casperjs](https://github.com/ronaldlokers/grunt-casperjs)

    ```javascript
      casperjs: {
        files: ['test/functional/**/*.js']
      }
    ```
3. Add your functional tests to your project's "test/functional" directory.
4. Add the following to your configuration:

    ```javascript
      functional_tests: {
        hostname: 'localhost',
        port: 35729,
      }
    ```
5. Run `grunt functional` and your functional tests will run on the host and port specified in your configuration. 

## Release History
0.1.1 - Initial Release.

## License
Copyright (c) 2012 Caige Nichols "caiges"  
Licensed under the MIT license.
