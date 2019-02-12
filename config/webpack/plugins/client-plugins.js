const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const plugins = {
  production: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
      sourceMap: true,
      extractComments: true
    }),
  ],
  development: [],
};

module.exports = (env) => plugins[env] || plugins.development;
