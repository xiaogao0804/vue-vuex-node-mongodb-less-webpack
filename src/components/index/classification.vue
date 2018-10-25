<template>
    <div>
        <el-row class="Prow" :key="index" v-for="(Pitem, index) in Pitems">
            <el-row class="row">
                <el-col :span="12" class="classificationName">
                    {{Pitem.name}}
                </el-col>
                <el-col :span="12" class="seeAll">
                    <router-link to="">查看全部</router-link>
                </el-col>
            </el-row>
            <el-row style="width:100%;overflow:scroll;">
                <ul class="clearfix" :class="index == 0 ? 'iterms0' : index == 4 ? 'iterms4' : 'iterms'">
                    <router-link tag="li" to="" :key="index" v-for="(item,index) in Pitem.classificationImg">
                        <img :src="item.img" alt="">
                        <p class="imgName">{{item.imgTxt}}</p>
                    </router-link>
                </ul>
            </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Classification', 
    props: ['Pitems'],
    mounted(){
        console.log(this.$props.Pitems)
    }
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
    .Prow{
        margin-bottom: 0.4rem;
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
        width: 19.5rem;
        li{
            width: 3rem;
            float: left;
            margin-right:0.24rem;
            img{
                width:3rem;
                height:4rem;
            }
            .imgName{
                width: 100%;
                font-size: 0.28rem;
                margin-top: 0.2rem;
            }
        }
    }
    .iterms0{
        width: 26rem;
        li{
            width: 3rem;
            float: left;
            margin-right:0.24rem;
            img{
                width:3rem;
                height:3rem;
            }
            .imgName{
                width: 100%;
                font-size: 0.28rem;
                margin-top: 0.2rem;
            }
        }
    }
    .iterms4{
        width: 25.5rem;
        li{
            width: 4rem;
            float: left;
            margin-right:0.24rem;
            img{
                width:4rem;
                height:3rem;
            }
            .imgName{
                width: 100%;
                font-size: 0.28rem;
                margin-top: 0.2rem;
            }
        }
    }
</style>

