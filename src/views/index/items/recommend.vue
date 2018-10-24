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
        <el-row>
            <Classification :classificationName = "classification.name" :items = "classification.classificationImg"></Classification>
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
            classification: {
                name: '生鲜料理包',
                classificationImg:[
                    {id: 0, img: 'src/assets/classification1.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'},
                    {id: 1, img: 'src/assets/classification2.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'},
                    {id: 2, img: 'src/assets/classification3.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'},
                    {id: 3, img: 'src/assets/classification4.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'},
                    {id: 4, img: 'src/assets/classification5.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'},
                    {id: 5, img: 'src/assets/classification6.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'},
                    {id: 6, img: 'src/assets/classification7.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'},
                    {id: 7, img: 'src/assets/classification8.jpg', imgTxt: '刀板香脆笋豆腐煲，徽菜特色腊味'}
                ],
            }
        }
    },
    mounted(){
        console.log('http',this.$http)
        this.$http.get('http://10.4.110.19:3000/classification').then((res) => {
            console.log('获取到的数据', res)
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
        margin: 0.2rem auto;
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

