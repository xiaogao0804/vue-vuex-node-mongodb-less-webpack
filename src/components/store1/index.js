import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './action.js'

Vue.use(Vuex)

const state = {
    isIcon: '',     //各tab页面的数字
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})