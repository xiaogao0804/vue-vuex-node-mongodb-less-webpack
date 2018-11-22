
/**
 * 插入表数据
 */
var mongoose = require('mongoose');
var menuDetailSchema = require('./schema.js').menuDetailModel    //引入表结构

//实例化模型
var menuDetailColaChicken1 = new menuDetailSchema({
  menuListName: '家常菜',
  menuDetailName: '可乐鸡翅',
  menuDetailImg: 'http://10.4.110.19:3000/classification1.jpg',
  menuDetailMaterial: '鸡翅，老抽，料酒，冰糖',
  menuDetailAuthor: '小星星',
  menuDetailAuthorImg: 'http://10.4.110.19:3000/classification1.jpg',
  menuDetailStep: '步骤'
})

//插入
menuDetailColaChicken1.save()