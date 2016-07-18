'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * common webpack config
 */
const webpack_common = require('./webpack.common.config');

module.exports = {
  context: __dirname + '/src',

  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',

    // js entry
    './app.js',

    // html entry
    './index.html'
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
    path: __dirname + '/dist'
  },

  devtool: 'eval'
};
