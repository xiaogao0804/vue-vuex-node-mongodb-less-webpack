<template>
    <div class="header">
        <el-row  :gutter="0">
            <el-col :span="leftSpanSearch" v-if="leftFaSearch" class="searchFa">
                <i class="fa" :class="leftFaSearch" @click="goBack"></i>
            </el-col>
            <el-col :span="leftSpan" v-if="leftFa">
                <i class="fa" :class="[ isIcon == 1 ? 'left-fa-icon1' : 'left-fa-icon2', leftFa ]"></i>
                <span class="geolocation" v-if = "isIcon == '2'">北京市</span>
            </el-col>
            <el-col :span="iptSpan" class="ipt_wrap" :class="[ leftFa ? '' : 'ipt-left']">
                <router-link tag="div" to="/search">
                  <el-input class="seatch_ipt" prefix-icon="el-icon-search" v-model="seatchTxt" :placeholder="[ iptHolder ]" clearable >
                  </el-input>
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
   export default {
       name: 'Header',
       props: [ 'leftFa', 'rightFa', 'iptHolder', 'isIcon', 'rightTxt', 'rightText', 'leftSpan', 'iptSpan', 'rightSpan', 'leftSpanSearch', 'leftFaSearch' ],
       data(){
           return {
                seatchTxt: '',
           }
       },
       methods:{
           //返回上一级页面
           goBack(){
               this.$router.go(-1)
           }
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
</style>

