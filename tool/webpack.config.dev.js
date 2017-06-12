/**
 * Created by CH on 2017/6/10.
 */
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = function() {
    return webpackMerge(baseConfig, {
        plugins:[
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ],
        devServer: {
            port: 7777,
            host: 'localhost',
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal',
            hot: true, // Tell the dev-server we're using HMR
            contentBase: path.resolve(__dirname, 'public'),
            publicPath: '/'
        }
    })
}
