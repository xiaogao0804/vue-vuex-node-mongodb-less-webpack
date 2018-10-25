/**
 * 连接数据库
 */
var mongoose = require('mongoose');
var app = require('express')();
var classification = require('./models/classfication.js');   //引入表数据
var DB_URL = "mongodb://localhost:27017/classification"

mongoose.connect(DB_URL);       //连接数据库

/**
 * 连接成功
 */
mongoose.connection.on('connected', function(){
    console.log('数据库连接成功！');
})

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('连接异常: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('连接断开');  
}); 

/**
 * 解决跨域问题
 */
app.all('/classification', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

module.exports = mongoose;