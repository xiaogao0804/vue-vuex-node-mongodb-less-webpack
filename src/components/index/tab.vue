<template>
  <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="推荐" name="first">推荐</el-tab-pane>
    <el-tab-pane label="家常菜" name="second">家常菜</el-tab-pane>
    <el-tab-pane label="烘焙" name="third">烘焙</el-tab-pane>
    <el-tab-pane label="肉类" name="fourth">肉类</el-tab-pane>
    <el-tab-pane label="蔬菜" name="fiveth">蔬菜</el-tab-pane>
    <el-tab-pane label="早餐" name="sixth">快手</el-tab-pane>
    <el-tab-pane label="甜品饮品" name="seventh">甜品饮品</el-tab-pane>
    <el-tab-pane label="汤" name="enightth">汤</el-tab-pane>
    <el-tab-pane label="主食" name="nineth">主食</el-tab-pane>
    <el-tab-pane label="下饭菜" name="tenth">下饭菜</el-tab-pane>
  </el-tabs> -->
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
</template>

<script>
 
  export default {
    data() {
      return {
        //activeName: 'second'
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
           //console.log('offsetLeft',e.currentTarget.offsetLeft)   
           //console.log(e.currentTarget.offsetParent.scrollLeft)         
           let leftDis = e.currentTarget.offsetLeft   //点击元素距离左边框的距离
           let windowWidth = document.body.clientWidth
            if( leftDis - Math.abs(this.left) >= windowWidth/2 ){
                let n = this.left
                let time = setInterval(() => {
                    //console.log(n)
                    if ( Math.abs(n) >= leftDis/1.8){
                        clearInterval(time)
                    }else{
                        //console.log('右滑动')
                         n--
                        that.left = n
                    }
                },10)
            }
            //console.log('left', Math.abs(this.left))
            //console.log('offsetLeft - windowWidth', leftDis - Math.abs(this.left))
            if ( leftDis - Math.abs(this.left) < windowWidth/2 && this.left != 0 &&  this.left != 1){
                let left1 = this.left
                //console.log('left1', left1)
                let n = 0;
                let time = setInterval(() => {
                    n++
                    //console.log(n)
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
    .wrap{
        padding:0 0.5rem;
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
</style>
