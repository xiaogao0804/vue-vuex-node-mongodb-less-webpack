<template>
    <el-container direction="vertical">
        <el-row v-if="recentIsShow" v-show="recentShow" style="margin-bottom:1rem;">
            <el-row class="recentSearch" type="flex" justify="space-between">
                <el-col :span='6' :offset="1">最近搜索</el-col>
                <el-col :span='3'  @click.native="handleClose()">清空</el-col>
            </el-row>
            <el-row class="tagBox">
                <el-tag class="tagSearch"
                    v-for="tag in tagsRecent" 
                    :key="tag.name" 
                    type="info">
                    {{tag.name}}
                </el-tag>
            </el-row>
        </el-row>
        <el-row v-if="fashonIsShow">
            <el-row class="recentSearch">
                <el-col :span='10' :offset="1">流行搜索</el-col>
            </el-row>
            <el-row class="tagBox">
                <el-tag class="tagSearch"
                    v-for="tag in tagsFashon" 
                    :key="tag.name" 
                    type="info">
                    {{tag.name}}
                </el-tag>
            </el-row>
        </el-row>
        <ul class="blurList" v-if="menuIsShow">
            <li 
                v-for="item in menuItems"
                :key="item.index">
                {{item.name}}
            </li>
        </ul>
    </el-container>
</template>

<script type=”text/javascript”>
    import { mapState } from 'vuex'

    export default {
        name: 'Search',
        data(){
            return {
                // recentIsShow: false,
                // fashonIsShow: true,
                // menuIsShow: false,
                recentShow: false,
                tagsRecent: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' }
                ],
                tagsFashon: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' }
                ],
                menuItems: [
                    { name: '标签一', type: '' },
                    { name: '标签二', type: 'success' },
                    { name: '标签三', type: 'info' },
                    { name: '标签四', type: 'warning' },
                    { name: '标签五', type: 'danger' }
                ],
            }
        },
        created(){
            //最近搜索显示隐藏
            if (this.tagsRecent.length > 0){
                //this.$store.state.searchHeader.isShow.recentIsShow = false
                this.recentShow = true
            }else{
                //this.$store.state.searchHeader.isShow.recentIsShow = true
                this.recentShow = false
            }
        },
        //获取聚焦或失去焦点时，isShow的变化
        computed: mapState({
           isShow: state => state.searchHeader.isShow,
           recentIsShow: state => state.searchHeader.isShow.recentIsShow,
           fashonIsShow: state => state.searchHeader.isShow.fashonIsShow,
           menuIsShow: state => state.searchHeader.isShow.menuIsShow
        }),

        methods:{
            //清空A
            handleClose() {
                //this.$store.state.searchHeader.isShow.recentIsShow = false
                this.recentShow = false
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
         margin-bottom: 10px;
     }
     .tagBox{
         width: 85%;
         margin:0 auto;
        .tagSearch{
            margin:0.12rem 0.12rem;
        }
     }
     .blurList{
         width: 90%;
         margin: 0 auto;
         li{
             height:1rem;
             border:1px solid red;
             font-size: 0.34rem;
            line-height:1rem;
         }
     }
    }
</style>
