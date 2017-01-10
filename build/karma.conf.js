/**
 * karma config
 */
var webpackConf = require('./webpack.base.conf')
delete webpackConf.entry

// CommonChnksPluginはTest時によろしくない.
// https://github.com/webpack/karma-webpack/issues/24
const commonsChunkPluginIndex = webpackConf.plugins.findIndex(plugin => plugin.chunkNames);
webpackConf.plugins.splice(commonsChunkPluginIndex, 1);


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
