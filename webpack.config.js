const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/main"),
  output: {
    path: path.resolve(__dirname, "./output"),
    filename: "index.bundle.js",
    // publicPath: "/output/",
  },
  mode: "development",
  devServer: {
    port: 7777,
    static: path.resolve(__dirname, "output"),
    hot: true,
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js", //等同于path.resolve(__dirname,'node_modules/vue/dist/vue.esm.js')
    },
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.(png|jpe?g|ico)$/,
        type: "asset",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      // {
      //   test: /\.vue$/,
      //   use: {
      //     loader: "vue-loader",
      //     options: {
      //       loaders: {
      //         scss: ["vue-style-loader", "css-loader", "sass-loader"],
      //         sass: ["vue-style-loader", "css-loader", "sass-loader"],
      //       },
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
    }),
  ],
};
