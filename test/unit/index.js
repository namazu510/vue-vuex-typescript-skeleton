// Polyfill fn.bind() for PhantomJS
/* eslint-disable */
Function.prototype.bind = require('function-bind')

// Polyfill es6-promise
require('es6-promise').polyfill()


// require all test files (files that ends with .spec)
var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
