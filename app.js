var koa = require("koa")
var proxy = require("koa-proxy")
var app =new koa()
var static = require("koa-static")
var Router = require('koa-router');
var router = new Router();
var fs = require("fs")
router.get('/', (ctx, next) => {
    let data = fs.readFileSync("./dist/index.html","utf-8",function(err,data){
        console.log(data)
    })
    ctx.body = data;
});

app.use(router.routes())

app.use(static(__dirname+'/dist/'));
app.use(proxy({
    host:"http://lk-app-dev.cloud.enndata.cn"
}))
app.listen(8080)