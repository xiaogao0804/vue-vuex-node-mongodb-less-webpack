<template>
  <div id="app" ref="app">
    <el-container>
      <el-main>      
        <router-view></router-view>
      </el-main>
      <el-footer style="height:45px;">
          <Tab></Tab>
      </el-footer>
    </el-container>
  </div>
</template>

<script type=”text/javascript” >

import Tab from './components/tab.vue'

export default {
  name: 'App',

  data(){
    return {
      
    }
  },
  mounted(){
    let hgt = document.documentElement.clientHeight + 'px' || document.body.clientHeight + 'px';
    this.$refs.app.style.height = hgt;
  },
  components: {
    Tab
  }
 
 }
</script>

<style lang="less" scoped>
    #app{
      overflow:scroll;
    }
   .el-container{
     width: 100%;
     height: 100%;
      .el-main{
       padding:0;
       font-size:0.4rem;
     }
      .el-footer{
        padding:0;
        cursor: pointer;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        .el-row{
          padding-top:0.12rem;
        }
      }
   }
</style>
