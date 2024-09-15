// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // Minify JS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // Minify CSS
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map", // Source maps in production for easier debugging
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], // Extract CSS in separate files
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ parallel: true }), // Minify JS
      new CssMinimizerPlugin(), // Minify CSS
    ],
    runtimeChunk: "single", // Separate runtime for better caching
    splitChunks: {
      chunks: "all", // Code-splitting for better performance
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Cache-busting for CSS files
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
});
