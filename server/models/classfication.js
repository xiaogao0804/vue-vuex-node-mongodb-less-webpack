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
            "img" : "http://10.4.110.19:3000/classification21.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 1,
            "img" : "http://10.4.110.19:3000/classification22.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 2,
            "img" : "http://10.4.110.19:3000/classification23.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 3,
            "img" : "http://10.4.110.19:3000/classification24.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 4,
            "img" : "http://10.4.110.19:3000/classification25.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 5,
            "img" : "http://10.4.110.19:3000/classification26.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }
    ]
});
var classification3 = new imgSchema({ 
    "name" : "专栏 . 电子书",
    "classificationImg" : [ 
        {
            "id" : 0,
            "img" : "http://10.4.110.19:3000/classification31.jpg",
            "imgTxt" : "用36道美食，揭开减肥的奥秘"
        }, 
        {
            "id" : 1,
            "img" : "http://10.4.110.19:3000/classification32.jpg",
            "imgTxt" : "用36道美食，揭开减肥的奥秘"
        }, 
        {
            "id" : 2,
            "img" : "http://10.4.110.19:3000/classification33.jpg",
            "imgTxt" : "用36道美食，揭开减肥的奥秘"
        }, 
        {
            "id" : 3,
            "img" : "http://10.4.110.19:3000/classification34.jpg",
            "imgTxt" : "用36道美食，揭开减肥的奥秘"
        }, 
        {
            "id" : 4,
            "img" : "http://10.4.110.19:3000/classification35.jpg",
            "imgTxt" : "用36道美食，揭开减肥的奥秘"
        }, 
        {
            "id" : 5,
            "img" : "http://10.4.110.19:3000/classification36.jpg",
            "imgTxt" : "用36道美食，揭开减肥的奥秘"
        }
    ]
});
var classification4 = new imgSchema({ 
    "name" : "市集精选折扣",
    "classificationImg" : [ 
        {
            "id" : 0,
            "img" : "http://10.4.110.19:3000/classification41.jpg",
            "imgTxt" : "这鱼丸有海的味道，一颗带你到鼓浪屿！"
        }, 
        {
            "id" : 1,
            "img" : "http://10.4.110.19:3000/classification42.jpg",
            "imgTxt" : "这鱼丸有海的味道，一颗带你到鼓浪屿！"
        }, 
        {
            "id" : 2,
            "img" : "http://10.4.110.19:3000/classification43.jpg",
            "imgTxt" : "这鱼丸有海的味道，一颗带你到鼓浪屿！"
        }, 
        {
            "id" : 3,
            "img" : "http://10.4.110.19:3000/classification44.jpg",
            "imgTxt" : "这鱼丸有海的味道，一颗带你到鼓浪屿！"
        }, 
        {
            "id" : 4,
            "img" : "http://10.4.110.19:3000/classification45.jpg",
            "imgTxt" : "这鱼丸有海的味道，一颗带你到鼓浪屿！"
        }, 
        {
            "id" : 5,
            "img" : "http://10.4.110.19:3000/classification46.jpg",
            "imgTxt" : "这鱼丸有海的味道，一颗带你到鼓浪屿！"
        }
    ]
});
var classification5 = new imgSchema({ 
    "name" : "菜单推荐",
    "classificationImg" : [ 
        {
            "id" : 0,
            "img" : "http://10.4.110.19:3000/classification51.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 1,
            "img" : "http://10.4.110.19:3000/classification52.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 2,
            "img" : "http://10.4.110.19:3000/classification53.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 3,
            "img" : "http://10.4.110.19:3000/classification54.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 4,
            "img" : "http://10.4.110.19:3000/classification55.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 5,
            "img" : "http://10.4.110.19:3000/classification56.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }
    ]
});
var classification6 = new imgSchema({ 
    "name" : "厨房活动",
    "classificationImg" : [ 
        {
            "id" : 0,
            "img" : "http://10.4.110.19:3000/classification61.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 1,
            "img" : "http://10.4.110.19:3000/classification62.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 2,
            "img" : "http://10.4.110.19:3000/classification63.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 3,
            "img" : "http://10.4.110.19:3000/classification64.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 4,
            "img" : "http://10.4.110.19:3000/classification65.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
        {
            "id" : 5,
            "img" : "http://10.4.110.19:3000/classification66.jpg",
            "imgTxt" : "购课即看 | 3种️口味酱靡蛋糕：百香果的好吃的"
        }, 
    ]
});

//插入
classification1.save();
classification2.save();
classification3.save();
classification4.save();
classification5.save();
classification6.save();