var express = require('express');
var mongoose = require('./db.js');    //引入数据库
var bodyParser = require('body-parser');
var app = express();
//解决跨域问题
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//静态文件
app.use(express.static(__dirname + "/assets/"));

var classificationRouter = require('./router/classification.js') //引入路由
var uploadRouter = require('./router/upload.js')
var menuListsRouter = require('./router/menuListsRouter.js')
var menuDetailRouter = require('./router/menuDetailRouter.js')
app.use('/',classificationRouter);                  //注册路由
app.use('/',uploadRouter); 
app.use('/',menuListsRouter); 
app.use('/',menuDetailRouter); 
/**
 * 解决跨域问题
 */
// app.all('/classification', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
app.listen(3000);
console.log('server running on port 3000');

