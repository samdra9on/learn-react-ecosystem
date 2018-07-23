module.exports = function badHandler(fn) {
    try {
      return fn();
    } catch (e) { }
    return null;
}