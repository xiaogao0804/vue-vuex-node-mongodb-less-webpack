<template>
    <el-container direction="vertical">
        <el-row>
            <Header :leftFa="leftFa" :isIcon="isIcon"></Header>
        </el-row>
        <el-row class="userInfo">
            <el-col class="userImg">
                <img src="../../assets/friend.png" alt="">
            </el-col>
            <el-col class="userTxt">
                <span>分享的人是厨房里的天使</span>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" style="margin-top:0.5rem;">
            <el-col class="createMenuBox" :span="10">
                <div class="ceateMenu"></div>
                <p>创建菜谱</p>
            </el-col>
            <el-col :span="10" class="upload">
                <el-upload
                    class="avatar-uploader"
                    action="http://10.4.110.19:3000/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <p>上传作品</p>
            </el-col>
        </el-row>
        <el-row style="margin-top:2rem;">
            <p style="text-align:center;border-top:1px dashed rgb(245, 244, 244);border-bottom: 1px dashed rgb(245, 244, 244);height:1rem;line-height:1rem;">草稿箱</p>
        </el-row>
    </el-container>
</template>

<script>
import Header from '../../components/header.vue'

export default {
    name: 'Share',
    data(){
        return {
            isIcon:'7',
            leftFa: 'fa-times',
            imageUrl: ''
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
    components:{
        Header
    }
}
</script>

<style lang='less' scoped>
    .userInfo{
        width: 100%;
        margin-top:1rem;
        .userImg{
            text-align: center;
            img{
                border-radius:50%;
                width:1rem;
                height:1rem;
            }
        }
        .userTxt{
            margin-top:0.3rem;
            text-align: center;
            font-size: 0.32rem;
        }
    }
    .createMenuBox{
        margin:0 auto;
        .ceateMenu{
            width: 3rem;
            height:4rem;
            border:1px dashed blue;
            border-radius: 6px;
        }
        p{
            text-align: center;
            margin-top:0.2rem;
            font-size:0.32rem;
        }
    }
    .upload{
        margin: 0 auto;
        p{
            text-align: center;
            margin-top:0.2rem;
            font-size:0.32rem;
        }
    }
    .avatar-uploader {
        border: 1px dashed blue;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 3rem;
        height: 4rem;
    }
    .el-upload{
        width: 100%;
        height:100%;
    }
    .avatar-uploader:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 3rem;
        height: 4rem;
        line-height: 4rem;
        text-align: center;
    }
    .avatar {
        width: 3rem;
        height: 4rem;
        display: block;
    }
</style>

