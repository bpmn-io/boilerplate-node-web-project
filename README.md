# bpmn-io npm browserify project boilerplate

This is a blueprint you can use to create your own web compatible browserifiable projects.


## Placeholders

After copying the template replace the following placeholders in the `package.json` file:

* `<%= AUTHOR_NAME %>`: your name
* `<%= AUTHOR_GITHUB_NAME %>`: your name on [GitHub](https://github.com)
* `<%= PACKAGE_NAME %>`: the name of the project (for npm package and repository)
* `<%= PACKAGE_DESCRIPTION %>`: a short description of the package


## Project structure

The following shows the general project structure

```plain
├─dist
├─docs
│ └─api
├─lib
│ └─foo.js
├─resources
├─test
│ ├─config
│ ├─fixtures
│ └─spec
│   └─fooSpec.js
├─tmp
│ └─reports
├─Gruntfile.js
├─index.js
└─package.json
```

A note on the structure:

*   `dist` location of the distribution ready (web packed) files
*   `docs` contains documentation relevant for developers or users

    *   `docs/api` gets generated from the project sources

*   `lib` contains the project sources

*   `resources` can contain non-js sources such as JSON config files or images

*   `test` contains all test related data

    *   `test/config` holds [Karma](https://karma-runner.github.io) config files
    *   `test/spec` and sub folders hold test cases;
        test case naming convention: `<name>Spec.js`
    *   `test/integration` and sub folders hold integration (post bundle) tests;
        test case naming convention: `<name>Spec.js`
    *   `test/fixtures` hold test data

*   `index.js` is the main entry point for the module


## What is inside

The boilerplate uses the following components:

* [browserify](http://browserify.org/), for file bundling
* [grunt](http://gruntjs.com) for building
* [jasmine](https://jasmine.github.io/), version 2.0 for testing
* [jsdoc](http://usejsdoc.org/) for documentation generation
* [jshint](http://jshint.com/) for linting
* [karma](https://karma-runner.github.io/), for test execution


## Build tasks

The contained `Gruntfile.js` configures the following build tasks:


#### default (test, lint, build, generate docs)

Performs all neccessary tasks in the correct order.

```
grunt
```


#### auto-build

Watches for library changes and re-builds the library.

```
grunt auto-build
```


#### auto-test

Watches for library or test changes and re-runs the test suite automatically.

```
grunt auto-test
```


#### release

Releases a new version of the library (on [npm](http://npmjs.org) and [GitHub](https://github.com)).

```
grunt release:minor
grunt release:patch
grunt release:major
```


## License

MIT