<template>
     <el-container>
      <el-header>
        <Header :isIcon = 'isIcon' :leftFa = 'leftFa' :rightFa = 'rightFa' :iptHolder = 'iptHolder'></Header>
      </el-header>
      <el-main>
       <div class="index-main"  @click="handle()">
           <Tab></Tab>
           <keep-alive>    <!-- 缓存路由页面 -->
             <router-view></router-view>
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
            // console.log('isIcon', this.isIcon)
            // let storageNum = localStorage.getItem('isIcon')
            // console.log('isIcon', storageNum)
            // if ( storageNum && storageNum != ''){       //保存isIcon的点击状态，使其刷新或者返回时，还保持原状态
            //     this.isIcon = storageNum
            // }else{
            //     this.isIcon = 1
            // }

            //index.vuethis.handle()
            //console.log('created', this)
        },
        mounted(){
            //console.log('路由', this.$router)
        },
        methods:{
            handle:function(){
                  //this.$store.commit('CHANGE_TABNUM', 6)
                  console.log('index',this.$store)
                  this.$store.dispatch('changeTabnum', this.isIcon)
                  console.log('store',this.$store.state.isIcon.isIcon)
                  console.log(this)
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
     .el-header, .el-main{
       padding:0;
     }
     .el-main{
         .index-main{
             //border:1px solid red;
       }
     }
   }
</style>
