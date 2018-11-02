/**
 * 集合表结构
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema     

 //表
 var imgSchema = new Schema({
    name: { type: String },
    classificationImg: { type: Array },
    id: { type: Number},
    img: { type: String },
    imgTxt: { type: String }
})

//模糊查询表
var blurListSchema = new Schema({
    keyWord: { type: String},
    blurWord: { type: Array }
})

var Model = mongoose.model('imgSchema', imgSchema);   //输出模型
var blurListModel = mongoose.model('blurListSchema', blurListSchema)

module.exports = { 
    Model,
    blurListModel
}
