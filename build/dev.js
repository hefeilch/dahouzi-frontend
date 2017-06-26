/**
 * Created by CH on 2017/6/10.
 */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.js');
const config = require('./config');
const path = require('path');

let outputPath = '../public';
let publicPath = '/'

module.exports = function() {
    return webpackMerge(baseConfig, {
        entry: {
            index: [
                'react-hot-loader/patch',
                //
                // 'webpack-dev-server/client?http://localhost:3000',
                //
                // 'webpack/hot/only-dev-server',

                './src/entry/index'
            ]
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.NamedModulesPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
                '__DEV__': true,
                '__MOCKED__': true,
                '__REQUEST_PATH__': JSON.stringify(config.REQUEST_PATH_DEV)
            }),

        ],
        devServer: {
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
            hot: true, // Tell the dev-server we're using HMR
            contentBase: path.resolve(__dirname, outputPath),
            publicPath: publicPath,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
        }
    })
}
