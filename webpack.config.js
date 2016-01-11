var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var autoprefixer = require('autoprefixer');

var entries = [
  './app/styles/main.scss',
  './app/js/index.js'
]

var pnrMate = {
  entry: entries,
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".scss"]
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader','css!sass!postcss')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  output: {
      path: path.join(__dirname, "build/js/"),
      filename: "app.js"
  },
  plugins: [
    new ExtractTextPlugin('../../build/css/app.css')
  ]
};

module.exports = pnrMate;
