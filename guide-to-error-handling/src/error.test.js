const error = require('./error');

test('throws a TypeError', function () {
    expect(error).toThrow(TypeError);
});