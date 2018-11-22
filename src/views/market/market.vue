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
    import { mapMutations } from 'vuex'
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
        mounted(){
            //console.log('路由', this.$router)
        },       
        components: {
            Header
        },
        
        /**
         * 进入该组件之前被调用（测试）
         */
        beforeRouteEnter:(to,from,next)=>{
                //此时该组件还没被实例化
                console.log('组件路由守卫，进入该组件之前被调用')
                //console.log(this.isIcon);       //为 undefined
            next(vm =>{
                //此时该组件被实例化了
                console.log(vm.isIcon);         //弹出消息框信息为 2
            })
        },
        /**
         * 离开组件之后调用（测试）
         */
        beforeRouteLeave(to,from,next){
            console.log('组件内路由守卫，离开组件之后调用')
            if(confirm("确定离开吗？") == true){
                next()   //跳转到另一个路由
            }else{
                next(false);//不跳转
            }
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
