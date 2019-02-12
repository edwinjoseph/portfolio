const path = require('path');
const commonPlugins = require('../plugins/common-plugins');
const clientPlugins = require('../plugins/client-plugins');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  watch: !isProduction,
  mode: isProduction ? 'production' : 'development',
  entry: {
    bundle: [path.join(process.cwd(), 'src/entry/client/Client.tsx')],
  },
  output: {
    path: path.join(process.cwd(), './build/public'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      require('../rules/ts-loader')(),
      require('../rules/sauce-map-loader')(),
    ],
  },
  plugins: [
    ...commonPlugins(process.env.NODE_ENV),
    ...clientPlugins(process.env.NODE_ENV),
  ]
};

module.exports = config;
