
/* global foo */

describe('as library', function() {

  it('should expose foo global', function() {
    expect(foo).toBeDefined();
  });

});