<template>
         <el-row>
           <el-col :span="5" @click.native="tabSwitch($event)" data-num = '1'>
             <router-link to="/index">
              <i class="fa icon" :class="[ isIcon == '1' ? 'fa-hourglass iconActive' : 'fa-hourglass-o' ]"></i>
              <span class="tab_name" :class="[ isIcon == '1' ? 'tab_nameActive' : '' ]">下厨房</span>
             </router-link>
           </el-col>
           <el-col :span="5" @click.native="tabSwitch($event)" data-num = '2'>
             <router-link to="/market">
              <i class="fa icon" :class="[ isIcon == '2' ? 'fa-bell iconActive' : 'fa-bell-o' ]"></i>
              <span class="tab_name" :class="[ isIcon == '2' ? 'tab_nameActive' : '' ]">市集</span>
             </router-link>
           </el-col>
           <el-col :span="5" @click.native="tabSwitch($event)" data-num = '3'>
             <router-link to="/collection">
              <i class="fa icon" :class="[ isIcon == '3' ? 'fa-heart iconActive' : 'fa-heart-o' ]"></i>
              <span class="tab_name" :class="[ isIcon == '3' ? 'tab_nameActive' : '' ]">收藏</span>
             </router-link>
           </el-col>
           <el-col :span="5" @click.native="tabSwitch($event)" data-num = '4'>
             <router-link to="/mailbox">
              <i class="fa icon" :class="[ isIcon == '4' ? 'fa-envelope-open iconActive' : 'fa-envelope-open-o' ]"></i>
              <span class="tab_name" :class="[ isIcon == '4' ? 'tab_nameActive' : '' ]">信箱</span>
             </router-link>
           </el-col>
           <el-col :span="4" @click.native="tabSwitch($event)" data-num = '5'>
             <router-link to="/user">
              <i class="fa icon" :class="[ isIcon == '5' ? 'fa-user iconActive' : 'fa-user-o' ]"></i>
              <span class="tab_name" :class="[ isIcon == '5' ? 'tab_nameActive' : '' ]">我</span>
             </router-link>
           </el-col>
         </el-row>
</template>

<script type="text/javascript">

export default {
  name: 'Tab',

  data(){
    return {
      isIcon: '1'
    }
  },
  beforeCreate(){
     //console.log('beforeCreate')
  },
  created(){
      //tab.vueconsole.log('isIcon', this.isIcon)
      let storageNum = localStorage.getItem('isIcon')
      //console.log('isIcon', storageNum)
      if ( storageNum && storageNum != ''){       //保存isIcon的点击状态，使其刷新或者返回时，还保持原状态
          this.isIcon = storageNum
      }else{
          this.isIcon = 1
       }
            
            
    //console.log('tabstore',this.$store.state.isIcon.isIcon)
    //console.log('isIcon', this.isIcon)           //实例化之后才能打印出data里面的数据
  },
  beforeMount(){
    //console.log('beforeMount')
  },
  methods: {
    tabSwitch: function(event){
      let num = event.currentTarget.dataset.num;
      this.isIcon = num
      localStorage.setItem('isIcon', num)
      console.log('tab', this.$store.state.isIcon.isIcon)

    }
  },
  beforeUpdate(){
    //console.log('beforeUpdate')
  },
  updated(){
    //console.log('updated')
  },
  beforeDestroy(){
    //console.log('beforeDestroy')
  },
  destroyed(){
    //console.log('destroyed')
  },
 }
</script>

<style lang="less" scoped>
       .el-col{
          text-align: center;
          font-size:0.4rem;
         .icon{
           display: block;
         }
         .tab_name{
             font-size:0.3rem;
         }
         .iconActive{
           color:red;
         }
         .tab_nameActive{
          color: red;
         }
       }
</style>

