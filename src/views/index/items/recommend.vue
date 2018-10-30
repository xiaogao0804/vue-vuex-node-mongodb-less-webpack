<template>
    <div class="recommend_wrap">
        <el-row :gutter="15">
            <el-col :span="12" class="left"><img src="../../../assets/popular.png" alt=""></el-col>
            <el-col :span="12" class="right"><img src="../../../assets/friend.png" alt=""></el-col>
        </el-row>
        <el-row>
            <Broadcast :items = "menu" :name = "menuName" :tabBar = true></Broadcast>
        </el-row>
        <el-row>
            <Broadcast :items = "meal" :name = "mealName" :pagination = true></Broadcast>
        </el-row>
        <el-row>
            <router-link to="www.baidu.com">
                <img src="../../../assets/see.png" alt="" class="member">
            </router-link>
        </el-row>
        <!-- 请求来的数据是异步的，渲染是同步的，所以先判断是不是有数据了，再进行渲染，否则报错undefined -->
        <el-row v-if="classification.length > 0">   
            <Classification :Pitems = "classification"></Classification>
        </el-row>
        <el-row>   
            <img style="width:100%;" src="../../../assets/classification.jpg" alt="">
        </el-row>
    </div>
</template>

<script  type=”text/javascript”>
import Vue from 'vue'
import Broadcast from '../../../components/index/broadcast'
import Classification from '../../../components/index/classification'
import axios from  'axios'

Vue.prototype.$http = axios

export default {
    name: 'Recommend',
    data(){
        return {
            menuName: 'menu',
            mealName: 'meal',
            tabBar: true,
            pagination: true,
            menu:[
                {'id': 0, img: 'src/assets/rec1.jpg'},
                {'id': 1, img: 'src/assets/rec2.jpg'},
                {'id': 2, img: 'src/assets/rec3.jpg'},
                {'id': 3, img: 'src/assets/rec4.jpg'},
                {'id': 4, img: 'src/assets/rec5.jpg'}
            ],
            meal:[
                {'id': 0, img: 'src/assets/rec1.jpg'},
                {'id': 1, img: 'src/assets/rec2.jpg'},
                {'id': 2, img: 'src/assets/rec3.jpg'},
            ],
            classification: []
        }
    },
    mounted(){
        this.$nextTick( () => {                  //$nextTick  数据变化之后Dom更新完了执行里面的回调函数
            this.$http.get('http://10.4.110.19:3000/classification').then((res) => {
                if( res.status == 200 ){
                    console.log('获取到的数据', res.data)
                    this.classification = res.data.classification
                    console.log(this.classification[0].name)
                }else{
                    this.$message({
                        showClose: true,
                        message: '服务器开小差了，请稍后重试！',
                        type: 'error'
                    });
                }
            })           
        })
    },
    components: {
        Broadcast,
        Classification
    }
}
</script>
<style lang='less' scoped>
    .recommend_wrap{
        width: 95%;
        border: 1px solid red;
        margin: 0.7rem auto;
        .el-row{
            margin-bottom:0.32rem;
        }
        .left, .right{
            img{
                width: 100%;
                height:2.4rem;
            }
        }
        .member{
            width: 100%;
             height:2.5rem;
        }
    }

</style>

