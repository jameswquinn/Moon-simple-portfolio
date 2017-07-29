var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



var loaders = [
  {
    "test": /\.jsx?$/,
    "exclude": /node_modules/,
    "loader": "babel-loader",
    "query": {
      "presets": [
        "babel-preset-es2015"
      ],
      "plugins": []
    }
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
    })
  },
  {
    "test": /\.json?$/,
    "loader": "json-loader"
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.tpl.html'),
        filename: 'index.html',
        inject: false
      }),
    new CopyWebpackPlugin([
      { from: './src/thanks.html' },
      { from: './src/favicons', to: 'favicons' }
    ]),
    new OfflinePlugin(),
    new ProgressBarPlugin()
  ],
  module: {
    loaders: loaders
  },
  devServer: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
};
