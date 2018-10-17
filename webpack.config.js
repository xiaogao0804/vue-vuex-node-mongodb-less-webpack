/**
 * webpack基本通用配置
 */

const path = require('path')
const webpack = require('webpack')
//const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')              //单独打包css文件第一步
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpackDevServer = require('webpack-dev-server');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname + "/dist"),    //存放打包生成的文件地址
        filename:  "[name]/[name].min.js", 
        publicPath: "./"             //自动引入到index.html里面的文件地址格式                    
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: 'css-loader'
                //   })
            },
            {
                test:/\.vue$/,
                loader:['vue-loader']
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({                            //单独打包css文件第二步
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                  })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                },
                exclude: [/node_modules/]
            },
            {
                //字体图标配置
                test: /\.(gif|png|jpg|woff|svg|ttf|eot|woff2)\??.*$/,
                loader: {
                     loader: 'file-loader?name=fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin('./dist'),
        //热更新
        //new webpack.HotModuleReplacementPlugin(),
        //new OpenBrowserPlugin({url: 'http://localhost:3002'}),
        new ExtractTextPlugin('[name]/[name].css'),                         //单独打包css文件第三步，打包不同文件夹下的不同css
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    resolve: {
        extensions: ['.vue', '.js', '.json', '*', '.less', '.css']
    }
}