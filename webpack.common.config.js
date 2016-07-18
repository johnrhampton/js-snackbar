'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  loaders: [
    {
      loader: 'babel',

      test: /\.js$/,

      exclude: /node_modules/,

      // Options to configure babel with
      query: {
        plugins: ['transform-runtime']
      }
    },

    {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    },

    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }
  ]
};
