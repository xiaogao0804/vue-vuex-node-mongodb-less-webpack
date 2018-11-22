var express = require('express')
var router = express.Router()
var app = express();
var menuListsModel = require('../models/schema.js').menuListsModel    //引入模型

//路由设置并从数据库查找数据
router.get('/menuLists', function(req, res, next){
    console.log('我接受到了menuLists get请求');
    //console.log('res', res.statusCode)
    //查找
    if( res.statusCode == 200 ){
        menuListsModel.find(function(err, menuLists){           //model可以操作数据库，所以是Model  contactList是返回的所有文档
            //console.log("数据库",menuListsModel)
            var menuLists = menuLists
            var obj = {
                code: 200,
                menuLists: menuLists,
                message: "获取数据成功！"
            }
            res.json(obj)
        })
    }
    else if( res.statusCode == 403 ){
        var obj = {
            code: 403,
            message: '请求被禁止！'
        }
        res.json(obj)
    }
    else if( res.statusCode == 500 ){
        var obj = {
            code: 500,
            message: '服务器故障！'
        }
        res.json(obj)
    }
})
module.exports = router