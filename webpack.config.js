var webpack = require('webpack');

module.exports = {
  cache: true,

  watch: true,

  entry: {
    'app': ['./public/js/app/main.js'],
    'pc': ['./public/js/pc/main.js'],
    'sp': ['./public/js/sp/main.js']
  },

  output: {
    filename: '[name].js'
  },

  node: {
    fs: "empty"
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue" },
      { test: /\.js$|\.jsx$/, exclude: /node_modules|build/, loader: 'babel-loader'}
    ]
  },

  plugins: [],

  resolve: {
    root: __dirname,
    alias: {
    },
    extensions: ['', '.js']
  }
};
