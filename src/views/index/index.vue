<template>
    <el-container>
      <el-header class="contain-header">
        <Header :isIcon = 'isIcon' :leftFa = 'leftFa' :rightFa = 'rightFa' :iptHolder = 'iptHolder' :leftSpan = "leftSpan" :iptSpan = "iptSpan" :rightSpan = "rightSpan"></Header>
      </el-header>
      <el-main class="main-content">
       <div class="index-main">
           <Tab></Tab>
           <keep-alive>    <!-- 缓存路由页面 -->
             <router-view :key="$route.path" v-if="$route.meta.keepAlive"></router-view>
           </keep-alive>
        </div> 
      </el-main>
    </el-container>
</template>

<script type="text/javascript">
    import { mapMutations } from 'vuex'
    import Header from '../../components/header'
    import Tab from '../../components/index/tab'

    export default {
        name: 'Index',
        data(){
            return {
                isIcon: '1',
                leftFa: 'fa-plus',
                rightFa: 'fa-shopping-basket',
                iptHolder: '请输入搜索内容',
                leftSpan:3,
                iptSpan: 17,
                rightSpan: 4
            }
        },
        created(){
            //设置mutationd负荷header数据
            let searchHeader = {
                isIcon: this.isIcon,
                iptHolder: this.iptHolder
            }
            this.changeIsicon(searchHeader)
        },
        methods:{
            //mutations辅助函数改变searchState中的数据
            //修改store中的isIcon写法一
            // changeIsicon(){
            //     console.log('store', this.$store)
            //     this.$store.commit('CHANGE_ISICON', this.isIcon)      // === this.$store.dispatch('changeIsicon', this.isIcon) 
            // },
            //写法二，借助于辅助函数
            ...mapMutations({
                changeIsicon: 'CHANGE_ISICON'
            })
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
     .main-content{
       padding:0;
       margin-top: 70px;
        .index-main{
           position:relative;
       }
     }
   }
</style>
