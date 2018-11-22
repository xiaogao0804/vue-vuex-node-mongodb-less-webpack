var express = require('express')
var router = express.Router()
var app = express();
var Model = require('../models/schema.js').Model    //引入模型

//路由设置并从数据库查找数据
router.get('/classification', function(req, res, next){
    console.log('我接受到了get请求');
    //查找
    if( res.statusCode == 200 ){
        Model.find(function(err, classification){           //model可以操作数据库，所以是Model  contactList是返回的所有文档
            //console.log("数据库",classification)
            var classification = classification
            var obj = {
                code: 200,
                classification: classification,
                message: "获取数据成功！"
            }
            res.json(obj)
        })
    }
})
module.exports = router