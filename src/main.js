import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'    //引入路由
import routes from '../src/router/router.js'  //引入路由文件
import store from './store/index.js'      //引入数据管理文件
import { rem } from './utils/rem.js'
import ElementUI from 'element-ui'
import 'lib-flexible'
import './styles/base.css'
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)     //注册路由

//创建路由实例
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,                  //注入路由
  store,
  //template: '<App/>',     //vue1.0的写法
  //components: { App },    //vue1.0的写法
  render: h => h(App),        //vue2.0的写法 ==》function(createElement){ return createElement(App)}   //return createElement('h2','hello ll')
 created(){
    rem(document, window)
  }
})




