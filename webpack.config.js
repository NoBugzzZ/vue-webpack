const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/main"),
  output: {
    path: path.resolve(__dirname, "./output"),
    filename: "index.bundle.js",
    publicPath: "/output/",
  },
  mode: "development",
  devServer: {
    port: 7777,
    static: path.resolve(__dirname),
    hot: true,
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'    //等同于path.resolve(__dirname,'node_modules/vue/dist/vue.esm.js')
    }
  }
};