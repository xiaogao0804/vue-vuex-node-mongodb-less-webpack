<template>
    <div class="header">
        <el-row  :gutter="0">
            <el-col :span="3" v-if="leftFa">
                <i  class="fa" :class="[ isIcon == 1 ? 'left-fa-icon1' : 'left-fa-icon2', leftFa ]"></i>
                <span class="geolocation" v-if = " isIcon == '2'">北京市</span>
            </el-col>
            <el-col :span="17" class="ipt_wrap" :class="[ leftFa ? '' : 'ipt-left']">
                <el-input class="seatch_ipt" v-model="seatchTxt" :placeholder="[ iptHolder ]" clearable >

                </el-input>
            </el-col>
            <el-col :span="4">
                <i class="fa right-fa" :class="[ rightFa ]" v-if= "rightFa"></i>
                <span class="rightTxt" v-if= "rightTxt">{{rightTxt}}</span>
            </el-col>
        </el-row>
    </div>
</template>

<script type=”text/javascript”>
   export default {
       name: 'Header',
       props: [ 'leftFa', 'rightFa', 'iptHolder', 'isIcon', 'rightTxt' ],
       data(){
           return {
                seatchTxt: '',
           }
       }
       
   }
    
</script>

<style lang="less" scoped>
    .el-row{
        font-size:0.4rem;
        .left-fa-icon1{
            padding:0.3rem 0 0.2rem 0.3rem;
            cursor: pointer;
        }
        .left-fa-icon2{
            padding:0.1rem 0 0 0.3rem;
            cursor: pointer;
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
    }
</style>

