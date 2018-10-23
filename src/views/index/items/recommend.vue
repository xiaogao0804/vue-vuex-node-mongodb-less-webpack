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
    </div>
</template>

<script  type=”text/javascript”>
import Broadcast from '../../../components/index/broadcast'

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
        }
    },
    components: {
        Broadcast
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
    }

</style>

