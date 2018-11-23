import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'    //引入路由
import routes from '../src/router/router.js'  //引入路由文件
import store from './store/index.js'      //引入数据管理文件
import { rem } from './utils/rem.js'
import ElementUI from 'element-ui'
import './styles/base.css'
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from  'axios'
import VConsole from 'vconsole/dist/vconsole.min.js'

var vConsole = new VConsole();

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)     //注册路由

//创建路由实例
const router = new VueRouter({
  //mode:'history',
  mode:'hash',
  // scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
  //   console.log(to) // to：要进入的目标路由对象，到哪里去
  //   console.log(from) // from：离开的路由对象，哪里来
  //   console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
  //   if(savePosition) {
  //     return savePosition;
  //   }else{
  //     return {x:0,y:0}
  //   }
  // },
  routes
})

//全局路由守卫，任何跳转都会先执行这个（测试）
router.beforeEach(function(to, from, next){
  //console.log(this)      //vue实例未实例化，不能使用this
  console.log('全局路由守卫')
  console.log('路由名字', to.name)
  next()                   //有next()，会继续执行，会渲染，没有next,视图没有被渲染, next(false)不会向下执行
}),

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    msg: 'haha'
  },
  router,                  //注入路由
  store,
  //template: '<App/>',     //vue1.0的写法
  //components: { App },    //vue1.0的写法
  render: h => h(App),        //vue2.0的写法 ==》function(createElement){ return createElement(App)}   //return createElement('h2','hello ll')
  created(){
    rem(document, window)
  },
})




