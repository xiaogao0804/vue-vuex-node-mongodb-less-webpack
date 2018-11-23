<template>
  <transition name="scroll-move">
    <el-container class="detail_box" ref="menuDetail">
      <el-header>
        <Header :isIcon = "isIcon" :leftSpan = "leftSpan" :rightSpan = "rightSpan" :leftFa="leftFa" :leftFaTwo="leftFaTwo" :leftFaThree="leftFaThree" :leftFaForth="leftFaForth" :rightFa="rightFa"></Header>
      </el-header>
      <el-main class="detail_box">
        <MenuDetailCom></MenuDetailCom>
      </el-main>
    </el-container>
  </transition>
</template>

<style lang="less" scoped>
  .detail_box{
    width: 100%;
    height: 1000px;
    padding:0;
      .el-header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        padding: 0;
     }
     .el-header-white{
       background: #fff;
     }
  }
  .scroll-move-enter-active, .scroll-move-leave-active{
    transition: all .5s ease;
  }
  .scroll-move-enter, .scroll-move-leave-to{
    transform: translateX(100px);
    opacity: 0;
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
  mounted(){
    window.addEventListener('scroll', this.handleScroll, true)      //监听滚动事件，加上第三个参数true，否则监听scroll事件失效
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log('scrollTop', scrollTop)
    }
  },
  
  components:{
    Header,
    MenuDetailCom
  }
}
</script>

