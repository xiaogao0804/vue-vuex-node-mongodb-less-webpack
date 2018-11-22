<template>
  <div class="detail_box">
    <div class="detail_con">

    </div>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>

export default {
  name: 'MenuDetail',
  data(){
    return {
    }
  },
    /**
     * 获取菜谱详情
     */
    // mounted(){
    //     let date=new Date();
    //     let timer=date.getTime().toString();
    //     this.$nextTick( () => {                  
    //         this.$http.get('http://10.4.110.19:3000/menuDetail?' + timer).then((res) => {     
    //             if( res.status == 200 ){
    //                 console.log('获取到的数据', res.data.menuDetail)
    //             }else{
    //                 this.$message({                             
    //                     showClose: true,
    //                     message: '服务器开小差了，请稍后重试！',
    //                     type: 'error'
    //                 });
    //             }
    //         })           
    //     })
    // },
  components:{

  }
}
</script>

