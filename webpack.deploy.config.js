'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * common webpack config
 */
const webpack_common = require('./webpack.common.config');

module.exports = {
  context: __dirname + '/src/lib',

  entry: [
    // js entry
    './snackbar.js'
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
