<template>
    <div>
     <el-container>
      <el-header>
        <Header :isIcon = 'isIcon' :leftFa = 'leftFa' :rightFa = 'rightFa' :iptHolder = 'iptHolder'></Header>
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
                isIcon: '2',
                leftFa: 'fa-stop-circle-o',
                rightFa: 'fa-cart-plus',
                iptHolder: '搜索商品'
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
