<template>
    <div class="swiper-container" :class="name">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(item,index) in items">
                <router-link tag="li" to="www.baidu.com">
                    <img :src="item.img" alt="">
                </router-link>
            </div>
        </div>
         <div class="swiper-scrollbar" v-if = "tabBar"></div>
         <div class="swiper-pagination" v-if = "pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
    name: 'Broadcast',
    props: ['items', 'name', 'tabBar', 'pagination'],
    data(){
        return {

        }
    },
    mounted(){
        var mySwiper = new Swiper('.menu', {                 //通过父组件传过来的不同的类名来显示同一组件的不同功能
          autoplay:true,
          loop:true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })

        var mySwiper2 = new Swiper('.meal', {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
    },
    
}
</script>

<style lang="less" scoped>
    .swiper-slide{
        width: 100%;
        height:2.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
</style>


