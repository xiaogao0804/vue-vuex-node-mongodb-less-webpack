<template>
    <div>
     <el-container>
      <el-header>
        <Header :leftFa = 'leftFa' :rightFa = 'rightFa' :iptHolder = 'iptHolder'></Header>
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
                isIcon: 2,
                leftFa: 'fa-stop-circle-o',
                rightFa: 'fa-cart-plus',
                iptHolder: '搜索商品'
            }
        },
        created(){  
            this.changeIsicon(this.isIcon)
        },
        mounted(){
            //console.log('路由', this.$router)
        }, 
        methods: {
            //修改store中的isIcon
            // changeIsicon(){
            //     this.$store.commit('CHANGE_ISICON', this.isIcon)     //===  this.$store.dispatch('changeIsicon', this.isIcon)             
            // }

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
