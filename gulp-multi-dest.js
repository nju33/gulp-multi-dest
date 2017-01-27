const lazypipe = require('lazypipe');
const flatten = require('lodash.flatten');
const curry = require('lodash.curry');

module.exports = curry((gulpDest, paths) => {
  return flatten(paths).reduce((func, path) => (
    func.pipe(gulpDest, path)
  ), lazypipe());
});
