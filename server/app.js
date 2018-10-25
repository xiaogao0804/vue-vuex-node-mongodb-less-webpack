var express = require('express');
var mongoose = require('./db.js');    //引入数据库
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//静态文件
app.use(express.static(__dirname + "/assets/"));

var classificationRouter = require('./router/classification.js') //引入路由
app.use('/',classificationRouter);                  //注册路由

app.listen(3000);
console.log('server running on port 3000');

