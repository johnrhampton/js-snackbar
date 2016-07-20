'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * common webpack config
 */
const webpack_common = require('./webpack.common.config');

module.exports = {
  context: __dirname + '/src',

  entry: [
    // js entry
    './lib/snackbar.js',

    // style entry
    './assets/styles/snackbar.scss'
  ],

  module: {
    preLoaders: [],

    loaders: webpack_common.loaders
  },

  plugins: [
    new ExtractTextPlugin('snackbar.css')
  ],

  output: {
    filename: 'snackbar.js',
    path: __dirname + '/dist',
    library: 'js-snackbar',
    /**
     *  means using universal module definition for the final result
     *  this piece of code recognizes the environment and provides a proper bootstrapping mechanism
     */
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'eval'
};
