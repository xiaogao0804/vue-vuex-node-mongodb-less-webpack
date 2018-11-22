<template>
  <el-container class="detail_box">
    <el-header>
      <Header :isIcon = "isIcon" :leftSpan = "leftSpan" :rightSpan = "rightSpan" :leftFa="leftFa" :leftFaTwo="leftFaTwo" :leftFaThree="leftFaThree" :leftFaForth="leftFaForth" :rightFa="rightFa"></Header>
    </el-header>
    <el-main class="detail_con">
      <MenuDetailCom></MenuDetailCom>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
  .detail_con{
    width: 100%;
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

<script>
import Header from '../../../../components/header.vue'
import MenuDetailCom from '../../../../components/Index/menuDetail.vue'         //子组件名字不可以为MenuDetail，防止和父组件重名，导致递归运算，导致栈溢出错误

export default {
  name: 'MenuDetail',
  data(){
    return {
      isIcon: 8,
      leftFa: 'fa-angle-left',
      leftFaTwo: 'fa-weixin',
      leftFaThree: 'fa-chrome',
      leftFaForth: '···',
      rightFa: 'fa-shopping-basket',
      leftSpan: 20,
      rightSpan: 4
    }
  },
  created(){
    console.log('路径', this.$route.query.menuName)         //根据传过来的参数获取该菜谱的详情
  },
  
  components:{
    Header,
    MenuDetailCom

  }
}
</script>

