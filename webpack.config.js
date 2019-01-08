var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: path.join(__dirname, "events"),
  entry: {
    events: './static/events/react_apps/events.react.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },
  mode: "development",
  optimization: {
    minimize: false
  },
  output: {
    path: path.join(__dirname, "events/static/webpack_bundles/"),
    filename: 'events.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ]
}