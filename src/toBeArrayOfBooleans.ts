// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeBoolean = require('./toBeBoolean');

// public
module.exports = function toBeArrayOfBooleans(actual: any): boolean {
  return toBeArray(actual) && every(actual, toBeBoolean);
};
