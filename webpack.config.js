const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/main"),
  output: {
    path: path.resolve(__dirname, "./output"),
    filename: "index.bundle.js",
    publicPath: "/output",
  },
  mode: "none",
  devServer: {
    port: 7777,
    static:path.resolve(__dirname)
  },
};
