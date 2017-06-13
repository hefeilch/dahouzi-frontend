/**
 * Created by CH on 2017/6/10.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let outputPath = '../public';
let publicPath = '/'

module.exports = {
    target: 'web',
    devtool: 'cheap-module-source-map',
    entry: {
        index: './src/entry/index',
        // about: './src/entry/about',
        // error: './src/entry/error',
        // admin: './src/entry/admin'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, outputPath),
        publicPath: publicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [path.join(__dirname, ''), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                    options: { sourceMap: true }
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "postcss-loader", //
                    options: { sourceMap: true }
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: { sourceMap: true }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                },
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '大猴子',
            template: './src/page/index.ejs'
        })
    ]
}