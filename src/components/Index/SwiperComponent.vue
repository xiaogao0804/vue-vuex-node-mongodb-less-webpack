<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrap">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <keep-alive>
            <component :is="item.component"></component>        <!-- 动态组件<component></component>通过:is='模板文件'动态加载不同模板文件 -->
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>
// tab滑动组件事例   http://www.cnblogs.com/zishang91/p/7940433.html

import MenuDetail from '../../components/index/MenuDetail.vue'
import MenuLists from '../../components/index/MenuLists.vue'

export default {
  name:'SwiperComponent',
  data(){
    return {
      list: [
        { path: '/menuDetail', component: MenuDetail },
        { path: '/menuLists', component: MenuLists }
      ]
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      //设定初始化时slide的索引


    })
  },
  components: {
    MenuDetail,
    MenuLists
  }
}
</script>

