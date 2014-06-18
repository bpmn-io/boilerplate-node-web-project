var foo = require('../../lib/foo');


describe('foo', function() {

  it('should equal BAR', function() {

    expect(foo).toBe('BAR');
  });


  it('should asynchronously equal BAR', function(done) {

    setTimeout(function() {

      expect(foo).toBe('BAR');
      done();
    }, 100);
  });

});