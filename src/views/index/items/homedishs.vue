<template>
    <div>
        <MenuLists :menuItems = "menuItems"></MenuLists>
    </div>
</template>

<script type=”text/javascript”>
import MenuLists from '../../../components/index/menuLists.vue'

export default {
    name: 'Homedishs',
    data(){
        return {
            menuItems: []             //过滤后的菜谱数据
        }
    },
    components: {
        MenuLists
    },
    computed: {
        //过滤出menuListsName为homedishes的数据传给子组件
        // menuItermsFilter: function(){
        //      this.menuLists.filter(function(item){
        //         return item.menuListsName == "homedishes"
        //     })
        // }
    },
    /**
     * 获取菜谱列表
     */
    mounted(){
        let date=new Date();
        let timer=date.getTime().toString();
        this.$nextTick( () => {                  //$nextTick  数据变化之后Dom更新完了执行里面的回调函数
            this.$http.get('http://10.4.110.19:3000/menuLists?' + timer).then((res) => {     //避免304，加上时间或者随机数保证，每次请求的数据都是最新的，而不是从缓存中请求得的
                if( res.status == 200 ){
                    console.log('获取到的数据', res.data.menuLists)
                    let menuLists = res.data.menuLists.filter(function(item){           //过滤出menuListsName为homedishes的数据传给子组件
                        return item.menuListsName == "homedishes"
                    })
                    this.menuItems = menuLists[0].menuItems
                }else{
                    this.$message({                               //elementUi 方法
                        showClose: true,
                        message: '服务器开小差了，请稍后重试！',
                        type: 'error'
                    });
                }
            })           
        })
    },

}
</script>
