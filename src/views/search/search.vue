<template>
    <el-container>
        <el-header class="contain-header">
            <Header :leftFaSearch = 'leftFaSearch' :leftSpanSearch = "leftSpanSearch" :rightText = 'rightText' :iptHolder = 'iptHolder' :leftSpan = "leftSpan" :iptSpan = "iptSpan" :rightSpan = "rightSpan"></Header>
        </el-header>
        <el-main class="main-content"> 
            <SearchCom></SearchCom>
        </el-main>
    </el-container>
</template>

<script type=”text/javascript”>
    import { mapState } from 'vuex'
    import Header from '../../components/header.vue'
    import SearchCom from '../../components/searchCom.vue'

    export default {
        name: 'Search',
        data(){
            return {
                isIcon:'',
                leftFa: '',
                rightFa: '',
                iptHolder: '',
                leftSpan:0,
                iptSpan: 0,
                rightSpan: 0,
                rightText:'',
                leftFaSearch:'',
                leftSpanSearch: ''
            }
        },
        components:{
          Header,
          SearchCom  
        },
        created(){
            if ( this.searchHeader ){
               this.isIcon = this.searchHeader.isIcon
               this.iptHolder = this.searchHeader.iptHolder
                console.log('this.isIcon', this.isIcon)
               switch (this.isIcon){
                    case "1":
                      this.iptSpan = 20;
                      this.rightSpan = 4;
                       this.rightText = '取消';
                       break;
                    case "2":
                      this.leftFaSearch = 'fa-angle-left fa-2x'
                      this.iptSpan = 20;
                      this.leftSpanSearch = 3;
                      break;
                    case "3":
                      this.iptSpan = 20;
                      this.rightSpan = 4; 
                      this.rightText = '取消'     
               }
            }

        },
        //从store中取出isIcon，借助辅助函数
        computed: mapState({
            searchHeader: state => state.searchHeader.searchHeader
        }),
        //直接从store中取出isIcon
        // computed:{
        //     isIcon(){
        //         return this.$store.state.searchHeader.searchHeader
        //     }
        // },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    .el-container{
     width: 100%;
     height: 100%;
     .el-header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background: #fff;
        padding: 0;
     }
     .main-content{
         margin-top:70px;
     }
    }
</style>
