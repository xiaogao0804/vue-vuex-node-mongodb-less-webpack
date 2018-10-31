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
    import { mapMutations } from 'vuex'
    import Header from '../../components/header'

    export default {
        data(){
            return {
                isIcon: '3',
                rightTxt: '创建菜单',
                iptHolder: '搜索我的收藏'
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
            ...mapMutations({
                changeIsicon: 'CHANGE_ISICON'
            })
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
             
       }
     }
   }
</style>
