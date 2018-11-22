var mutiPart = require('connect-multiparty')    //form表单需要的中间件
var mutiPartMiddeware = mutiPart() 
var express = require('express')
var app = express()
var router = express.Router()

//文件的储存位置
app.use(mutiPart({
    uploadDir: './temp'
}))

//接受form表单请求的接口路径，请求方式为post
router.post('/upload', mutiPartMiddeware, function(req, res){
    console.log('file', req.files.file.path)
    if ( res.statusCode == 200 ){
        var obj = {
            code: 200,
            message: "上传成功！！"
        }
        res.json(obj)
    }
})

module.exports = router