/**
 * 搜索search.vue组件相关数据
 */

const CHANGE_ISICON = 'CHANGE_ISICON'   //用常量代替事件类型，使得代码更清新

const searchHeader = {
    state:{
        searchHeader: {                       //header组件数据
            isIcon:'',
            iptHolder: '',
        }
    },
    mutations: {
        //设置state
        [CHANGE_ISICON] (state, searchHeader) {
            state.searchHeader = searchHeader
        }
    },
    actions:{
        changeIsicon( { commit }, searchHeader) {
            commit({
                type: 'CHANGE_ISICON',      //字符串
                searchHeader,
            })
        }
    }
}

export default searchHeader