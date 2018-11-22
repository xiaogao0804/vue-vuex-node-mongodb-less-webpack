
/**
 * 插入表数据
 */
var mongoose = require('mongoose');
var menuListSchema = require('./schema.js').menuListsModel    //引入表结构


//实例化模型
var menuListsHomedishs = new menuListSchema({
  "menuListsName":'homedishes',
  "menuListsNameCN": "家常菜",
  "ll": [1, 2, 4, 5],
  "menuItems": [
    { "id": 0, "menuImg": "http://10.4.110.19:3000/classification1.jpg", "menuName": "可乐鸡翅", "menuMaterial": "鸡翅，老抽，料酒，冰糖", "menuAuthor": "小星星", "menuScore": 8.2, "menuUsedPeople": 8888},
    { "id": 1, "menuImg": "http://10.4.110.19:3000/classification2.jpg", "menuName": "懒人版糖醋排骨", "menuMaterial": "猪小排，老抽，料酒，盐，里脊排骨", "menuAuthor": "小猫咪", "menuScore": 8, "menuUsedPeople": 188},
    { "id": 2, "menuImg": "http://10.4.110.19:3000/classification3.jpg", "menuName": "鱼香肉丝", "menuMaterial": "瘦肉，黑木耳，胡萝卜，冰糖，香菜", "menuAuthor": "大猫咪", "menuScore": 8.2, "menuUsedPeople": 999},
    { "id": 3, "menuImg": "http://10.4.110.19:3000/classification4.jpg", "menuName": "油焖大虾", "menuMaterial": "对虾，姜，蒜，香葱，白糖，蚝油", "menuAuthor": '小高', "menuScore": 8.2, "menuUsedPeople": 200},
    { "id": 4, "menuImg": "http://10.4.110.19:3000/classification5.jpg", "menuName": "糖醋里脊", "menuMaterial": "猪里脊，白糖，番茄酱，鸡蛋，生粉", "menuAuthor": "小高丽丽", "menuScore": 8.2, "menuUsedPeople": 300}
  ]
})

var menuListDesserts = new menuListSchema({
  "menuListsName":'desserts',
  "menuListsNameCN": "甜品",
  "menuItems": [
    { "id": 0, "menuImg": "http://10.4.110.19:3000/classification1.jpg", "menuName": "可乐鸡翅", "menuMaterial": "鸡翅，老抽，料酒，冰糖", "menuAuthor": "小星星", "menuScore": 8.2, "menuUsedPeople": 8888},
    { "id": 1, "menuImg": "http://10.4.110.19:3000/classification2.jpg", "menuName": "懒人版糖醋排骨", "menuMaterial": "猪小排，老抽，料酒，盐，里脊排骨", "menuAuthor": "小猫咪", "menuScore": 8, "menuUsedPeople": 188},
    { "id": 2, "menuImg": "http://10.4.110.19:3000/classification3.jpg", "menuName": "鱼香肉丝", "menuMaterial": "瘦肉，黑木耳，胡萝卜，冰糖，香菜", "menuAuthor": "大猫咪", "menuScore": 8.2, "menuUsedPeople": 999},
    { "id": 3, "menuImg": "http://10.4.110.19:3000/classification4.jpg", "menuName": "油焖大虾", "menuMaterial": "对虾，姜，蒜，香葱，白糖，蚝油", "menuAuthor": '小高', "menuScore": 8.2, "menuUsedPeople": 200},
    { "id": 4, "menuImg": "http://10.4.110.19:3000/classification5.jpg", "menuName": "糖醋里脊", "menuMaterial": "猪里脊，白糖，番茄酱，鸡蛋，生粉", "menuAuthor": "小高丽丽", "menuScore": 8.2, "menuUsedPeople": 300}
  ]
})

//插入
menuListsHomedishs.save();
menuListDesserts.save();