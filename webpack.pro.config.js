/**
 * webpack生产环境配置
 */
const path = require('path')
const webpack = require('webpack')
const uglify = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config')

module.exports = merge(common, {
    plugins:[
        new uglify(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
})
