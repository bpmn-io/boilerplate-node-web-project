module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [ 'jasmine' ],

    files: [
      'dist/foo.js',
      'test/integration/**/*Spec.js'
    ],

    reporters: [ 'dots' ],

    browsers: [ 'PhantomJS' ],

    singleRun: false,
    autoWatch: true
  });
};
