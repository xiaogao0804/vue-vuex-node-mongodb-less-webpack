<template>
    <div>
        <el-row class="row">
            <el-col :span="12" class="classificationName">
                {{classificationName}}
            </el-col>
            <el-col :span="12" class="seeAll">
                <router-link to="">查看全部</router-link>
            </el-col>
        </el-row>
        <el-row style="width:100%;overflow:scroll;">
            <ul class="iterms clearfix" >
                <router-link tag="li" to="" :key="index" v-for="(item,index) in items">
                    <img :src="item.img" alt="">
                    <p class="imgName">{{item.imgTxt}}</p>
                </router-link>
            </ul>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Classification', 
    props: ['classificationName', 'items',]
}
</script>

<style lang="less" scoped>
    .clearfix:after {
        content: " ";
        display: block;;
        line-height: 0;
        height: 0;
        visibility: hidden;
        clear: both;
    }
    .row{
        margin-bottom:0.26rem;
        .classificationName{
            font-size: 0.34rem;
            padding-left:0.2rem;
        }
        .seeAll{
            font-size: 0.28rem;
            text-align: right;
            padding-right:0.2rem;
            a{
                color: #8a9296;
            }
        }
    }
    .iterms{
        width: 26rem;
        li{
            width: 3rem;
            float: left;
            margin-right:0.24rem;
            img{
                width:3rem;
                height:3.5rem;
            }
            .imgName{
                width: 100%;
                font-size: 0.28rem;
            }
        }
    }
</style>

