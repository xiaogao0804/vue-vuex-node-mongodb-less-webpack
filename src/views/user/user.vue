<template>
     <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <div class="index-main"  @click="handle()">user.vue</div>            
      </el-main>
    </el-container>
</template>

<script type="text/javascript">
    import Header from '../../components/header'

    export default {
        name: 'User',
        data(){
            return {
                isIcon: '5'
            }
        },
        mounted(){
            console.log('路由', this.$router)
        },
        methods:{
            handle:function(){
                //this.$store.commit('CHANGE_TABNUM', 6)
                console.log('user',this.$store)
                this.$store.dispatch('changeTabnum', this.isIcon )
                console.log('store',this.$store.state.isIcon.isIcon)
            }
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