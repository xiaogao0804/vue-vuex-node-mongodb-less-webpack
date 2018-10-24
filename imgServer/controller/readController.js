var path = require('path');
var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true });//默认的情况下 gm使用的是另外一个图片处理程序

var app = process.app;
var config = app.get('read');
var targetDir = app.get('targetDir');

app.get('/:filename', function (req, res) {
    var filePath = path.join(targetDir, req.params.filename);
    console.log(filePath)
    fs.exists(filePath, function (exists) {
        res.sendfile(exists ? filePath : path.join(targetDir, config.default));
    });
});