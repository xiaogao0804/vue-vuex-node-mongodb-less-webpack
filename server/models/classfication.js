/**
 * 插入表数据
 */
var mongoose = require('mongoose');
var imgSchema = require('./schema.js')    //引入表结构
console.log('ddddd')

//实例化模型
var classification1 = new imgSchema({ 
    "name" : "生鲜料理包",
    "classificationImg" : [ 
        {
            "id" : 0,
            "img" : "http://10.4.110.19:3000/classification1.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }, 
        {
            "id" : 1,
            "img" : "http://10.4.110.19:3000/classification2.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }, 
        {
            "id" : 2,
            "img" : "http://10.4.110.19:3000/classification3.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }, 
        {
            "id" : 3,
            "img" : "http://10.4.110.19:3000/classification4.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }, 
        {
            "id" : 4,
            "img" : "http://10.4.110.19:3000/classification5.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }, 
        {
            "id" : 5,
            "img" : "http://10.4.110.19:3000/classification6.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }, 
        {
            "id" : 6,
            "img" : "http://10.4.110.19:3000/classification7.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }, 
        {
            "id" : 7,
            "img" : "http://10.4.110.19:3000/classification8.jpg",
            "imgTxt" : "刀板香脆笋豆腐煲，徽菜特色腊味"
        }
    ]
});
var classification2 = new imgSchema({ 
    "name" : "厨 studio 课堂",
    "classificationImg" : [ 
        {
            "id" : 0,
            "img" : "http://10.4.110.19:3000/classification1.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 1,
            "img" : "http://10.4.110.19:3000/classification2.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 2,
            "img" : "http://10.4.110.19:3000/classification3.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 3,
            "img" : "http://10.4.110.19:3000/classification4.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 4,
            "img" : "http://10.4.110.19:3000/classification5.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 5,
            "img" : "http://10.4.110.19:3000/classification6.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 6,
            "img" : "http://10.4.110.19:3000/classification7.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 7,
            "img" : "http://10.4.110.19:3000/classification8.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }
    ]
});

//插入
classification1.save();
classification2.save();