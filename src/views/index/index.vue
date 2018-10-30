<template>
    <el-container>
      <el-header class="contain-header">
        <Header :isIcon = 'isIcon' :leftFa = 'leftFa' :rightFa = 'rightFa' :iptHolder = 'iptHolder'></Header>
      </el-header>
      <el-main>
       <div class="index-main"  @click="handle()">
           <Tab></Tab>
           <keep-alive>    <!-- 缓存路由页面 -->
             <router-view :key="$route.path" v-if="$route.meta.keepAlive"></router-view>
           </keep-alive>
        </div> 
      </el-main>
    </el-container>
</template>

<script type="text/javascript">
    import Header from '../../components/header'
    import Tab from '../../components/index/tab'

    export default {
        name: 'Index',
        data(){
            return {
                isIcon: '1',
                leftFa: 'fa-plus',
                rightFa: 'fa-shopping-basket',
                iptHolder: '请输入搜索内容'
            }
        },
        created(){
            //this.handle()
        },
        methods:{
            handle:function(){
                  //this.$store.commit('CHANGE_TABNUM', 6)
                  //console.log('index',this.$store)
                  this.$store.dispatch('changeTabnum', this.isIcon)
                  //console.log('store',this.$store.state.isIcon.isIcon)
                  //console.log(this)
            }
        },
        components: {
            Header,
            Tab
        }
    }
</script>

<style lang="less">
   .el-container{
     width: 100%;
     height: 100%;
     .el-header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background: #fff;
        padding: 0;
     }
     .el-main{
       padding:0;
       margin-top: 30px;
        .index-main{
           position:relative;
       }
     }
   }
</style>
