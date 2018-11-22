<template>
    <div class="header">
        <el-row  :gutter="0">
            <!-- 搜索页面 -->
            <el-col :span="leftSpanSearch" v-if="leftFaSearch" class="searchFa">
                <i class="fa" :class="leftFaSearch" @click="goBack"></i>
            </el-col>
            <el-col :span="leftSpan" v-if="leftFa">
                <!-- 下厨房 -->
                <router-link to="/share">
                    <i class="fa left-fa-icon1" v-if = "isIcon == 1" :class=" leftFa "></i>
                </router-link>
                <!-- 市集 -->
                <router-link to="">
                    <i class="fa left-fa-icon2" v-if = "isIcon==2" :class="leftFa"></i>
                    <span class="geolocation" v-if = "isIcon == '2'">北京市</span>
                </router-link>
                <!-- 分享 -->
                <i class="fa left-fa-icon2" v-if = "isIcon==7" :class="leftFa" @click="goBack"></i> 
                <!-- 菜谱详情 -->   
                <div class="menu-detail" v-if="isIcon == 8">
                    <i class="fa left-fa-icon2 fa-2x fa-back" :class="leftFa" @click="goBack"></i> 
                    <i class="fa fa-wx" :class="leftFaTwo"></i>
                    <i class="fa fa-fd" :class="leftFaThree"></i>
                    <i class="fa fa-all">{{leftFaForth}}</i>
                </div>           
            </el-col>
            <el-col v-if = "isIcon != 7 && isIcon != 8" :span="iptSpan" class="ipt_wrap" :class="[ leftFa ? '' : 'ipt-left']">
                <router-link tag="div" to="/search">
                  <el-input class="seatch_ipt" prefix-icon="el-icon-search" v-model="seatchTxt" :placeholder="[ iptHolder ]" clearable @focus="focusSearch" @blur="blurSearch"></el-input>
                </router-link>
            </el-col>
            <el-col :span="rightSpan">  
                <span class="rightText" v-if= "rightText" @click="goBack">{{rightText}}</span>
                <i class="fa right-fa" :class="[ rightFa ]" v-if= "rightFa"></i>
                <span class="rightTxt" v-if= "rightTxt">{{rightTxt}}</span>
            </el-col>
        </el-row>
    </div>
</template>

<script type=”text/javascript”>

    import { mapActions } from 'vuex'
    import {  mapMutations } from 'vuex'

    export default {
       name: 'Header',
       props: [ 'leftFa', 'leftFaTwo', 'leftFaThree', 'leftFaForth', 'rightFa', 'iptHolder', 'isIcon', 'rightTxt', 'rightText', 'leftSpan', 'iptSpan', 'rightSpan', 'leftSpanSearch', 'leftFaSearch' ],
       data(){
           return {
                seatchTxt: ''
           }
       },
       created(){
           //console.log('isIcon', this.$props)
       },
       methods:{
             //返回上一级页面
            goBack(){
               this.$router.go(-1)
            },
            //触发focus/blur时数据的变化
            ...mapMutations({
                isShow: 'ISSHOW'
            }),
            //focus搜索列表显示
            focusSearch(){
                console.log('聚焦')
                this.menuIsShow = true
                this.recentIsShow = false
                this.fashonIsShow = false
                let isShow = {
                    menuIsShow: this.menuIsShow,
                    recentIsShow: this.recentIsShow,
                    fashonIsShow: this.fashonIsShow
                }
                this.isShow(isShow)    //负荷
                // console.log('聚焦',   this.recentIsShow,  this.fashonIsShow, this.menuIsShow)
            },
            //blur搜索列表隐藏
            blurSearch(){
                console.log('失去焦点')
                this.menuIsShow = false
                this.recentIsShow = true
                this.fashonIsShow = true
                let isShow = {
                    menuIsShow: this.menuIsShow,
                    recentIsShow: this.recentIsShow,
                    fashonIsShow: this.fashonIsShow
                }
                this.isShow(isShow)   //负荷
                //console.log('失去焦点', this.recentIsShow,  this.fashonIsShow, this.menuIsShow)
            },

       }
   }
    
</script>

<style lang="less" scoped>
    .el-row{
        font-size:0.4rem;
        position:relative;
        height: 45px;
        .left-fa-icon1{
            padding:0.3rem 0 0.2rem 0.3rem;
            cursor: pointer;
        }
        .left-fa-icon2{
            padding:0.1rem 0 0 0.3rem;
            cursor: pointer;
        }
        .searchFa{
            cursor: pointer;
            height: 100%;
            position:relative;
            top:50%;
            left:0.3rem;
            transform: translateY(-50%);
        }
        .right-fa{
            padding: 0.3rem 0 0.2rem 0.4rem;
            cursor: pointer;
        }
        .geolocation{
            font-size: 0.2rem;
            padding-left: 0.1rem;
        }
        .ipt_wrap{
            margin-top:0.1rem;                  
            .seatch_ipt{
               .el-input__inner{
                   height:30px;
               }
            }
        }
        .ipt-left{
            margin-left:0.2rem;
        }
        .rightText{
            color: red;
            font-size: 0.36rem;
            position: absolute;
            top:50%;
            right:10px;
            transform: translateY(-50%);
        }
    }
    .menu-detail{
        font-size: 0.32rem;
        .fa-back{
            margin-right: 0.2rem;
        }
        .fa-wx{
            font-size: 0.38rem;
            margin-right: 0.2rem;
        }
        .fa-fd{
            font-size: 0.38rem;
            margin-right: 0.2rem;
        }
        .fa-all{
            font-size: 0.38rem;
        }
    }
</style>

