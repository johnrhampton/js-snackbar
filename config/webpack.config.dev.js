/**
 * webpack concepts are following facebook's create-react-app
 */
var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var srcPath = path.resolve(__dirname, '../src');
var nodeModulesPath = path.join(__dirname, '../node_modules');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    path.join(srcPath, 'local', 'app'),
    path.join(srcPath, 'assets/styles', 'snackbar.scss')
  ],

  output: {
    filename: 'app.js',
    path: './build'
  },

  resolve: {
    extensions: ['', '.js'],
  },

  resolveLoader: {
    root: nodeModulesPath,
    moduleTemplates: ['*-loader']
  },

  module: {
    preLoaders: [
      {
        loader: 'source-map',
        test: /\.js$/
      },

      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath,
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        include: srcPath,
        loader: 'babel',
        query: require('./babel.dev')
      },

      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },

      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },

  postcss: function() {
    return [autoprefixer];
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(srcPath, 'local', 'index.html')
    }),

    new OpenBrowserPlugin({url: 'http://localhost:8080'}),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    })
  ]
};
