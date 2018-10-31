<template>
    <el-container>
        <el-header class="contain-header">
            <Header :rightText = 'rightText' :iptHolder = 'iptHolder' :iptSpan = "iptSpan" :rightSpan = "rightSpan"></Header>
        </el-header>
    </el-container>
</template>

<script type=”text/javascript”>
    import Search from '../../components/search.vue'

    export default {
        name: 'Search',
        data(){
            return {
                rightText: '取消',
                iptHolder: '搜索菜谱、食材',
                iptSpan: 20,
                rightSpan:4
            }
        },
        components:{
          Search  
        }
    }
</script>

<style lang="less" scoped>
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
    }
</style>
