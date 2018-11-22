<template>
    <div class="menu_lists" v-if="menuItems.length>0">
        
        <div class="menu_items" v-for="menuItem in menuItems" :key="menuItem.id">
            <router-link :to="{ name: 'menuDetail', query: { menuName: menuItem.menuName}}">    <!-- 动态设置路由参数并传递给menuDetail详情 -->
                <div class="menu_items_con">
                    <img class="menu_items_img" :src="menuItem.menuImg" alt=""/>
                    <div class="menu_items_txt">
                        <p class="menu_item_name">{{menuItem.menuName}}</p>
                        <p class="menu_item_material">{{menuItem.menuMaterial}}</p>
                        <p class="menu_item_author">{{menuItem.menuAuthor}}</p>
                        <p class="menu_item_score">{{menuItem.menuScore}}分  {{menuItem.menuUsedPeople}}人做过</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>  

<style lang="less" scoped>
    .menu_items{
        width: 100%;
        margin: 0.5rem auto;
        .menu_items_con{
            width: 90%;
            margin: 0 auto;
            overflow: hidden;
            .menu_items_img{
                float: left;
                width: 2.5rem;
                height: 2rem;
            }
            .menu_items_txt{
                float: left;
                margin-left: 0.25rem;
                width: 3.5rem;
                .menu_item_name{
                    width: 100%;
                    font-size: 0.32rem;
                    color: #000;
                    overflow:hidden; //超出的文本隐藏
                    text-overflow:ellipsis; //溢出用省略号显示
                    white-space:nowrap; //溢出不换行
                }
                .menu_item_material{
                    width: 100%;
                    font-size: 0.26rem;
                    color: rgb(146, 145, 145);
                    overflow:hidden; //超出的文本隐藏
                    text-overflow:ellipsis; //溢出用省略号显示
                    white-space:nowrap; //溢出不换行
                    margin-top:0.1rem;
                }
                .menu_item_author{
                    width: 100%;
                    font-size: 0.26rem;
                    color: #ccc;
                    margin-top:0.1rem;
                }
                .menu_item_score{
                    width: 100%;
                    font-size: 0.26rem;
                    color: rgb(145, 145, 145);
                    overflow:hidden; //超出的文本隐藏
                    text-overflow:ellipsis; //溢出用省略号显示
                    white-space:nowrap; //溢出不换行
                    margin-top:0.1rem;
                }
            }
        }
    }
</style>

<script>

export default {
    name: 'MenuLists',
    props: {
        menuItems: Array          //父组件传过来的过滤后的菜谱数据
    },
    data(){
        return {
        }
    },
    created(){

    },
    mounted(){

    }

}
</script>

         