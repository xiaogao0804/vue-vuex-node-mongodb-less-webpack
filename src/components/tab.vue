<template>
  <el-row>
    <el-col :span="5" @click.native="tabSwitch($event)" data-num = '1'>
      <router-link :to="path">
        <i class="fa icon" :class="[ isIcon == '1' ? 'fa-hourglass iconActive' : 'fa-hourglass-o' ]"></i>
        <span class="tab_name" :class="[ isIcon == '1' ? 'tab_nameActive' : '' ]">下厨房</span>
      </router-link>
    </el-col>
    <el-col :span="5" @click.native="tabSwitch($event)" data-num = '2'>
      <router-link to="/market">
        <i class="fa icon" :class="[ isIcon == '2' ? 'fa-bell iconActive' : 'fa-bell-o' ]"></i>
        <span class="tab_name" :class="[ isIcon == '2' ? 'tab_nameActive' : '' ]">市集</span>
      </router-link>
    </el-col>
    <el-col :span="5" @click.native="tabSwitch($event)" data-num = '3'>
      <router-link to="/collection">
        <i class="fa icon" :class="[ isIcon == '3' ? 'fa-heart iconActive' : 'fa-heart-o' ]"></i>
        <span class="tab_name" :class="[ isIcon == '3' ? 'tab_nameActive' : '' ]">收藏</span>
      </router-link>
    </el-col>
    <el-col :span="5" @click.native="tabSwitch($event)" data-num = '4'>
      <router-link to="/mailbox">
        <i class="fa icon" :class="[ isIcon == '4' ? 'fa-envelope-open iconActive' : 'fa-envelope-open-o' ]"></i>
        <span class="tab_name" :class="[ isIcon == '4' ? 'tab_nameActive' : '' ]">信箱</span>
      </router-link>
    </el-col>
    <el-col :span="4" @click.native="tabSwitch($event)" data-num = '5'>
      <router-link to="/user">
        <i class="fa icon" :class="[ isIcon == '5' ? 'fa-user iconActive' : 'fa-user-o' ]"></i>
        <span class="tab_name" :class="[ isIcon == '5' ? 'tab_nameActive' : '' ]">我</span>
      </router-link>
    </el-col>
  </el-row>
</template>

<script type="text/javascript">
  export default {
    name: 'Tab',
    data(){
      return {
        isIcon: 1,
        path:''
      }
    },
    created(){

    },
    methods: {
      tabSwitch: function(event){
        let num = event.currentTarget.dataset.num;
        this.isIcon = num
        if (this.isIcon == 1 ){
          this.path = localStorage.getItem('path')
          console.log('ww', this.path)
        }
      }
    },
    watch:{
      $route(val){                             //监听路由的变化,动态设置路由，当从别的tabBar页面返回到‘下厨房’页面时，还是停留在原来的路由页面上
        let pathTxt = val.matched[0].path
        switch (pathTxt){
          case '/index':
            this.isIcon = 1;
            break;
          case '/market':
            this.isIcon = 2;
            break;
          case '/collection':
            this.isIcon = 3;
            break;
          case '/mailbox':
            this.isIcon = 4;
            break;
          case '/user':
            this.isIcon = 5;
            break;
        }
        console.log('isIcon', this.isIcon)
        if ( this.isIcon == 1 && val.matched.length > 1){
          this.path = val.matched[1].path
          localStorage.setItem('path',this.path)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-col{
    text-align: center;
    font-size:0.4rem;
      .icon{
        display: block;
      }
      .tab_name{
        font-size:0.3rem;
      }
      .iconActive{
        color:red;
      }
      .tab_nameActive{
        color: red;
      }
    }
</style>

