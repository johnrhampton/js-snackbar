/**
 * webpack concepts are following facebook's create-react-app
 */
var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcPath = path.resolve(__dirname, '../src/snackbar');
var nodeModulesPath = path.join(__dirname, '..', 'node_modules');

module.exports = {
  bail: true,

  devtool: 'eval',

  entry: {
    snackbar: path.join(srcPath, 'index')
  },

  output: {
    path: './dist',

    filename: '[name].js',

    /**
     * export the bundle as library (output.library is the name)
     * Use this, if you are writing a library and want to publish it as single file.
     */
    library: 'snackbar',

    /**
     *  means using universal module definition for the final result
     *  this piece of code recognizes the environment and provides a proper bootstrapping mechanism
     */
    libraryTarget: 'umd',

    /**
     * true will name the AMD module
     *    if libraryTarget = umd and library is set
     */
    umdNamedDefine: true
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
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        include: srcPath,
        loader: 'babel',
        query: require('./babel.dist')
      },

      {
        test: /\.css$/,
        // Disable autoprefixer in css-loader itself:
        // https://github.com/webpack/css-loader/issues/281
        // We already have it thanks to postcss.
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  eslint: {
    // TODO: consider separate config for production,
    // e.g. to enable no-console and no-debugger only in prod.
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },

  postcss: function() {
    return [autoprefixer];
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),

    new ExtractTextPlugin('[name].css')
  ]
};
