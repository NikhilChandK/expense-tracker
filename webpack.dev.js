// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map", // Easier debugging in development
  devServer: {
    historyApiFallback: true, // Allows routing in Single Page Applications
    static: {
      directory: "./dist", // Serve from dist
    },
    hot: true, // Enable Hot Module Replacement (HMR)
    open: true, // Open the browser automatically
    compress: true, // Enable GZIP compression
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // For React HMR
  ],
});
