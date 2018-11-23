<template>
  <div>
    <img class="detail_img" :src="menuDetail.menuDetailImg" alt="">
    <div class="detail_con">
        
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail_img{
    width: 100%;
    height: 5rem;
  }
  .detail_con{
    width: 91%;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>

<script>

export default {
  name: 'MenuDetail',
  data(){
    return {
      menuDetail: {
        type: Array,
        requied: true
      }
    }
  },
    /**
     * 获取菜谱详情
     */
    created(){
        let date=new Date();
        let timer=date.getTime().toString();                 
        this.$http.get('http://10.4.110.19:3000/menuDetail?' + timer).then((res) => {     
          if( res.status == 200 ){
            console.log('获取到的数据', res.data.menuDetail)
            this.menuDetail = res.data.menuDetail[0]
            console.log('数据', this.menuDetail)
          }else{
            this.$message({                             
              showClose: true,
              message: '服务器开小差了，请稍后重试！',
              type: 'error'
            });
          }         
      })
    },
  components:{

  }
}
</script>

