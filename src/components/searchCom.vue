<template>
    <el-container direction="vertical">
        <el-row class="recentSearch" type="flex" justify="space-between">
            <el-col :span='6' :offset="1">最近搜索</el-col>
            <el-col :span='3'>清空</el-col>
        </el-row>
        <el-row>
            <el-tag v-for="tag in tags" :key="tag.name" type="info">
                {{tag.name}}
            </el-tag>
        </el-row>
    </el-container>
</template>

<script type=”text/javascript”>

    export default {
        name: 'Search',
        data(){
            return {
                tags: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' }
                ]
            }
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
     .recentSearch{
         width: 100%;
         font-size: 0.28rem;
         color: #666;
         margin-bottom: 20px;
     }
    }
</style>
