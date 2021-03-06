import App from '../App.vue'

//定义路由组件
const index = r => require.ensure([], () => r(require('../views/index/index.vue')), 'index')
const market = r => require.ensure([], () => r(require('../views/market/market.vue')), 'market')
const collection = r => require.ensure([], () => r(require('../views/collection/collection.vue')), 'collection')
const mailbox = r => require.ensure([], () => r(require('../views/mailbox/mailbox.vue')), 'mailbox')
const user = r => require.ensure([], () => r(require('../views/user/user.vue')), 'user')
const search = r => require.ensure([], () => r(require('../views/search/search.vue')), 'search')
const share = r => require.ensure([], () => r(require('../views/share/share.vue')), 'share')

//定义二级路由
const  recommend= r => require.ensure([], () => r(require('../views/index/items/recommend')), 'recommend')
const  baking= r => require.ensure([], () => r(require('../views/index/items/baking')), 'baking')
const  dessert= r => require.ensure([], () => r(require('../views/index/items/dessert')), 'dessert')
const  homedishs= r => require.ensure([], () => r(require('../views/index/items/homedishs')), 'homedishs')
const  meat= r => require.ensure([], () => r(require('../views/index/items/meat')), 'meat')
const  onefood= r => require.ensure([], () => r(require('../views/index/items/onefood')), 'onefood')
const  quickhand= r => require.ensure([], () => r(require('../views/index/items/quickhand')), 'quickhand')
const  soup= r => require.ensure([], () => r(require('../views/index/items/soup')), 'soup')
const  staplefood= r => require.ensure([], () => r(require('../views/index/items/staplefood')), 'staplefood')
const  vegetable= r => require.ensure([], () => r(require('../views/index/items/vegetable')), 'vegetable')
const  videorecieps= r => require.ensure([], () => r(require('../views/index/items/videorecieps')), 'videorecieps')

//定义三级页面
const  menuDetail= r => require.ensure([], () => r(require('../views/index/items/menuDetail/menuDetail')), 'menuDetail')


export default [      //二级路由，对应app.vue
        //地址为空时，跳转到index.vue
        {
            name: '',
            path: '',
            redirect: '/index/items/recommend'
        },
        //首页下厨房页面
        {
            name: 'index',
            path: '/index',
            component: index,
            redirect: '/index/items/recommend',
            children: [
                {
                    path: "/index/items/recommend",
                    component: recommend,
                    meta: {
                        keepAlive: true   // 需要被缓存  false不需要被缓存
                    }                  
                },
                {
                    path: "/index/items/baking",
                    component: baking,
                    meta: {
                        keepAlive: true   // 需要被缓存 
                    }                  
                },
                {
                    path: "/index/items/dessert",
                    component: dessert,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },
                {
                    path: "/index/items/homedishs",
                    component: homedishs,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    },
                    // children: [
                    //     {
                    //         path: "/items/menuDetail",        //菜谱详情，此路由会在二级路由界面下显示
                    //         component: menuDetail
                    //     }   
                    // ]                
                },
                {
                    path: "/index/items/meat",
                    component: meat,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },
                {
                    path: "/index/items/onefood",
                    component: onefood,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },
                {
                    path: "/index/items/quickhand",
                    component: quickhand,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },
                {
                    path: "/index/items/soup",
                    component: soup,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },
                {
                    path: "/index/items/staplefood",
                    component: staplefood,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },
                {
                    path: "/index/items/vegetable",
                    component: vegetable,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },
                {
                    path: "/index/items/videorecieps",
                    component: videorecieps,
                    meta: {
                        keepAlive: true   // 需要被缓存  
                    }                   
                },

            ]
        },
        //市集页面
        {
            name: 'market',
            path: '/market',
            component: market
        },
        //收藏页面
        {
            name: 'collection',
            path: '/collection',
            component: collection
        },
        //信箱页面
        {
            name: 'mailbox',
            path: '/mailbox',
            component: mailbox
        },
        //我页面
        {
            name: 'user',
            path: '/user',
            component: user
        },
        //搜索页面
        {
            name: 'search',
            path: '/search',
            component: search
        },
        //分享页面
        {
            name: 'share',
            path: '/share',
            component: share
        },
        //菜谱详情
        {
            name: 'menuDetail',
            path: "/items/menuDetail",         //path必须和router-link内的to路径对应
            component: menuDetail
        },  
        {
            path: '**',   // 错误路由
            redirect: '/index'   //重定向
        },
 
    ]