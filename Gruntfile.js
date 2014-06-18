module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  /* global process */

  // configures browsers to run test against
  // any of [ 'PhantomJS', 'Chrome', 'Firefox', 'IE']
  var TEST_BROWSERS = ((process.env.TEST_BROWSERS || '').replace(/^\s+|\s+$/, '') || 'PhantomJS').split(/\s*,\s*/g);

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      sources: 'lib',
      tests: 'test',
      dist: 'dist'
    },

    jshint: {
      src: [ '<%=config.sources %>/**/*.js', 'index.js' ],
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        jshintrc: true
      }
    },

    karma: {
      options: {
        configFile: '<%= config.tests %>/config/karma.unit.js'
      },
      single: {
        singleRun: true,
        autoWatch: false,

        browsers: TEST_BROWSERS,

        browserify: {
          debug: false,
          transform: [ 'brfs' ]
        }
      },
      unit: {
        browsers: TEST_BROWSERS,
        browserify: {
          transform: [ 'brfs' ]
        }
      },
      integration: {
        configFile: '<%= config.tests %>/config/karma.integration.js',

        singleRun: true,
        autoWatch: false,

        browsers: TEST_BROWSERS
      }
    },

    browserify: {
      options: {
        browserifyOptions: {
          builtins: false
        },
        bundleOptions: {
          detectGlobals: false,
          insertGlobalVars: [],
          debug: true
        }
      },
      watch: {
        files: {
          '<%= config.dist %>/foo.js': [ '<%= config.sources %>/foo.js' ]
        },
        options: {
          watch: true
        }
      },
      lib: {
        options: {
          bundleOptions: {
            standalone: 'foo'
          }
        },
        files: {
          '<%= config.dist %>/foo.js': [ '<%= config.sources %>/foo.js' ]
        }
      }
    },

    release: {
      options: {
        tagName: 'v<%= version %>',
        commitMessage: 'chore(project): release v<%= version %>',
        tagMessage: 'chore(project): tag v<%= version %>'
      }
    },

    jsdoc: {
      dist: {
        src: [ '<%= config.sources %>/**/*.js', 'index.js' ],
        options: {
          destination: 'docs/api',
          plugins: [ 'plugins/markdown' ]
        }
      }
    }
  });

  // tasks

  grunt.registerTask('test', [ 'karma:single' ]);

  grunt.registerTask('auto-test', [ 'karma:unit' ]);

  grunt.registerTask('integration-test', [ 'karma:integration' ]);


  grunt.registerTask('auto-build', [ 'browserify:watch' ]);

  grunt.registerTask('build', [
    'browserify:lib'
  ]);


  grunt.registerTask('default', [
    'jshint',
    'test',
    'build',
    'integration-test',
    'jsdoc'
  ]);
};