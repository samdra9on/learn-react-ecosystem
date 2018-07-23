const badHandler = require('./badHandler');

it('returns a value without errors', function() {
    var fn = function() {
      return 1;
    };

    var result = badHandler(fn);

    expect(result).toEqual(1);
});

it('returns a null with errors', function() {
    var fn = function() {
      throw new Error('random error');
    };

    var result = badHandler(fn);

    expect(result).toBeNull();
});