/**
 * 搜索search.vue组件相关数据
 */

const CHANGE_ISICON = 'CHANGE_ISICON'   //用常量代替事件类型，使得代码更清新
const ISSHOW = "ISSHOW"

const searchHeader = {
    state:{
        searchHeader: {                       //初始化header组件数据
            isIcon:'',
            iptHolder: ''         //input的placeholder
        },
        isShow:{
            menuIsShow: false,       //模糊搜索列表隐藏
            recentIsShow: false,     //最近搜索隐藏
            fashonIsShow: true       //流行搜索显示
        }
    },
    mutations: {
        //设置state
        [CHANGE_ISICON] (state, searchHeader) {
            state.searchHeader = searchHeader
        },
        [ISSHOW] (state, isShow){
            state.isShow = isShow
            console.log('隐隐约约isShow', state.isShow)
        }

    },
    actions:{
        changeIsicon( { commit }, searchHeader) {
            commit({
                type: 'CHANGE_ISICON',      //字符串
                searchHeader,
            })
        },
        isShow( {commit }, isShow) {
            commit({
                type: 'ISSHOW',      
                isShow,
            })           
        }
    }
}

export default searchHeader