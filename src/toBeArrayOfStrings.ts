// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeString = require('./toBeString');

// public
module.exports = function toBeArrayOfStrings(actual: any): boolean {
  return toBeArray(actual) && every(actual, toBeString);
};
