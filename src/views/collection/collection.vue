<template>
    <div>
     <el-container>
      <el-header>
        <Header :rightTxt = 'rightTxt' :iptHolder = 'iptHolder'></Header>
      </el-header>
      <el-main>
        
      </el-main>
    </el-container>
    </div>
</template>

<script type="text/javascript">
    import Header from '../../components/header'

    export default {
        data(){
            return {
                isIcon: '3',
                rightTxt: '创建菜单',
                iptHolder: '搜索我的收藏'
            }
        },
        mounted(){
            //console.log('路由', this.$router)
        },       
        components: {
            Header
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
             border:1px solid red;
       }
     }
   }
</style>
