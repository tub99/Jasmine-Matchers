// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfObjects = require('./toBeArrayOfObjects');

// public
module.exports = function toHaveArrayOfObjects(key: string, actual: any): boolean {
  return toBeObject(actual) && toBeArrayOfObjects(actual[key]);
};
