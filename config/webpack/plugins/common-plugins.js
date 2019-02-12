const webpack = require('webpack');

const plugins = {
  production: [
    require('../plugins/define-plugin')(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  dev: [],
};

module.exports = (env) => plugins[env] || plugins.dev;
