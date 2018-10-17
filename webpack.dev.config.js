/**
 * webpack开发环境配置
 */

const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const common = require('./webpack.config');


module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, "/"),
        publicPath:'/',
        port: 8080,
        host: '10.4.110.19',
        open: true,           
        index: 'index.html',
        inline: true,   //设置为true，当源文件改变时会自动刷新页面
        hot: false,
        compress: true,   //压缩
        //historyApiFallback: true   //如果设置为true，所有的跳转将指向index.html
    },
    plugins:[
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]

})