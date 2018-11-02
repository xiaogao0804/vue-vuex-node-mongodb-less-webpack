/**
 * 插入模糊查询关键字表数据
 */
var mongoose = require('mongoose');
var blurListSchema = require('./schema.js').blurListModel

//实例化模型
var blurList1 = new blurListSchema({
    "keyWord": 'h',
    "blurWord": [
        '胡萝卜','红烧肉', '红烧排骨', '红烧鱼', '回锅肉', '黄焖鸡', '花甲'
    ]
})

blurList1.save()