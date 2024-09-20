const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // Cache-busting for JS files
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'], // Efficient SVG handling
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                oneOf: [
                    {
                        test: /\.module\.css$/, // For CSS modules
                        use: ['style-loader', 'css-loader', 'postcss-loader'],
                    },
                    {
                        use: ['style-loader', 'css-loader', 'postcss-loader'], // Global CSS
                    },
                ],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'], // For LESS files
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                type: 'asset/resource', // Handle images efficiently
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/inline', // Handle fonts
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new LodashModuleReplacementPlugin(),
    ],
};
