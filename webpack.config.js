'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
    './local/app.js',

    // html entry
    './local/index.html',

    // style entry
    './assets/styles/snackbar.scss'
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],

    loaders: webpack_common.loaders
  },

  plugins: [
    new ExtractTextPlugin('snackbar.local.css'),
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ],

  /**
   * configure dev server
   */
  devServer: {
    // serve your index.html in place of 404 responses
    historyApiFallback: true
  },

  output: {
    filename: 'snackbar.local.js',
    path: __dirname + '/build'
  },

  devtool: 'inline-source-map'
};
