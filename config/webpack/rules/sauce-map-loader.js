module.exports = () => {
  return {
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader"
  }
};
