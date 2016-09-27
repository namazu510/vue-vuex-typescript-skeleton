/**
 * karma config
 */
var webpackConf = require('./webpack.base.conf')
delete webpackConf.entry

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    files: ['../test/unit/index.js'],
    preprocessors: {
      '../test/unit/index.js': ['webpack','babel', 'sourcemap']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
