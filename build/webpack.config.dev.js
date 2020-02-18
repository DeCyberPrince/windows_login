const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // devtool: 'eval', // Works in Windows & Linux
  devtool: 'cheap-module-eval-source-map', // Works in Windows, bit not Linux
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
