<template>
    <div class="box">
        <div class="wrap" ref="wrap">
            <ul class="items clearfix" ref="items" :style="{left: left + 'px'}">
                <li class="item" @click="navTab($event)" :class="[ isActive == 0 ? 'itemActive' : '']" data-num="0">
                    <router-link to="/index/items/recommend" :class="[ isActive == 0 ? 'txtActive' : '']">推荐</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 1 ? 'itemActive' : '']" data-num="1">
                    <router-link to="/index/items/homedishs" :class="[ isActive == 1 ? 'txtActive' : '']">家常菜</router-link>
                </li>
                <li class="item" @click="navTab($event)"  :class="[ isActive == 2 ? 'itemActive' : '']" data-num="2">
                    <router-link to="/index/items/baking" :class="[ isActive == 2 ? 'txtActive' : '']">烘焙</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 3 ? 'itemActive' : '']" data-num="3">
                    <router-link to="/index/items/meat" :class="[ isActive == 3 ? 'txtActive' : '']">肉类</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 4 ? 'itemActive' : '']" data-num="4">
                    <router-link to="/index/items/vegetable" :class="[ isActive == 4 ? 'txtActive' : '']">蔬菜</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 5 ? 'itemActive' : '']" data-num="5">
                    <router-link to="/index/items/quickhand" :class="[ isActive == 5 ? 'txtActive' : '']">快手</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 6 ? 'itemActive' : '']" data-num="6">
                    <router-link to="/index/items/dessert" :class="[ isActive == 6 ? 'txtActive' : '']">甜品饮品</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 7 ? 'itemActive' : '']" data-num="7">
                    <router-link to="/index/items/soup" :class="[ isActive == 7 ? 'txtActive' : '']">汤</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 8 ? 'itemActive' : '']" data-num="8">
                    <router-link to="/index/items/staplefood" :class="[ isActive == 8 ? 'txtActive' : '']">主食</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 9 ? 'itemActive' : '']" data-num="9">
                    <router-link to="/index/items/onefood" :class="[ isActive == 9 ? 'txtActive' : '']">一人食</router-link>
                </li>
                <li class="item" @click="navTab($event)" :class="[ isActive == 10 ? 'itemActive' : '']" data-num="10">
                    <router-link to="/index/items/videorecieps" :class="[ isActive == 10 ? 'txtActive' : '']">视频菜谱</router-link>
                </li>
            </ul>
        </div>
        <div class="rightIcon">
            <i class="fa fa-list-ul"></i>
        </div>
    </div>
</template>

<script>
 
  export default {
    data() {
      return {
        isActive:0,
        left:0
      };
    },
    created() {
        let storageNum = localStorage.getItem('num')
        if ( storageNum && storageNum != ''){       //保存isActive的点击状态，使其刷新或者返回时，还保持原状态
            this.isActive = storageNum
        }else{
            this.isActive = 0
        }
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      },
      navTab(e){
          let that = this
          //点击切换
          let num = e.currentTarget.dataset.num
          this.isActive = num
          localStorage.setItem('num', num)                //缓存tab切换的状态值

          //点击滑动       
           let leftDis = e.currentTarget.offsetLeft   //点击元素距离左边框的距离
           let windowWidth = document.body.clientWidth
            if( leftDis - Math.abs(this.left) >= windowWidth/2 ){
                let n = this.left
                let time = setInterval(() => {
                    if ( Math.abs(n) >= leftDis/1.8){
                        clearInterval(time)
                    }else{
                        //console.log('右滑动')
                         n--
                        that.left = n
                    }
                },10)
            }
            if ( leftDis - Math.abs(this.left) < windowWidth/2 && this.left != 0 &&  this.left != 1){
                let left1 = this.left
                let n = 0;
                let time = setInterval(() => {
                    n++
                    //console.log('左滑动')
                    that.left = left1 + n
                    if( n >= 50 || that.left > 0){
                        //console.log('清楚计时器')
                        clearInterval(time)
                    }
                },10) 
            }
      }
    },
  }
</script>
<style lang="less">
    .el-tabs__item{
        padding: 0 10px;
    }
    .clearfix:after{
        content:'';
        display:block;
        clear:both;
        visibility:hidden;
        height: 0;
        font-size:0;
    }
    .box{
        width:100%;
        position:relative;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        .wrap{
            //padding:0 0.5rem;
            width: 85%;
            padding-left:0.2rem;
            overflow: scroll;
            .items{
                width:14rem;
                display: flex;
                flex-direction: row;
                justify-content:space-between;
                position: relative;
                .item{
                    font-size: 0.3rem;
                    cursor: pointer;       
                }
                a{
                    color:#949292;
                }
                .itemActive{  
                    border-bottom:1px solid red;
                }
                .txtActive{
                    color:#000;
                }
            }
         }
         .rightIcon{
             position: relative;
             right:15px;
             top: 4px;
             cursor: pointer;
             .fa-list-ul{
                 font-size: 0.3rem;
             }
         }
    }
</style>
