import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import searchHeader from './modules/searchState.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        searchHeader
    },   
    getters
})


export default store