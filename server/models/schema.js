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

//菜谱查询表
var menuListSchema = new Schema({
    menuListsName: { type: String },
    menuListsNameCN: { type: String },
    menuItems: { type: Array },
    id: { type: Number},
    menuName: { type: String },
    menuImg: { type: String },
    menuScore: { type: Number },
    menuMaterial: { type: String },
    menuAuthor: { type: String },
    menuUsedPeople: { type: Number }

})

//菜谱详情查询表
var menuDetailSchema = new Schema({
    menuListName: { type: String },    
    menuDetailName: { type: String },             
    menuDetailImg: { type: String },
    menuDetailMaterial: { type: String },
    menuDetailAuthor: { type: String },
    menuDetailAuthorImg: { type: String },
    menuDetailStep: { type: Array },
})  

 //输出模型
var Model = mongoose.model('imgSchema', imgSchema);    //推荐图片模型
var blurListModel = mongoose.model('blurListSchema', blurListSchema)   //模糊查询数据模型
var menuListsModel = mongoose.model('menuListSchema', menuListSchema)     //菜谱查询
var menuDetailModel = mongoose.model('menuDetailSchema', menuDetailSchema)  //菜谱详细信息查询

module.exports = { 
    Model,
    blurListModel,
    menuListsModel,
    menuDetailModel
}
