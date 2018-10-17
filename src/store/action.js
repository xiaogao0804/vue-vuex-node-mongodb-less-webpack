
/**
 * 创建actions
 */
import { CHANGE_TABNUM } from './mutations.js'
 
 export default {
     changeTabnum ( { commit }, isIcon) {
         commit({
             type: 'CHANGE_TABNUM',      //字符串
             isIcon,
         })
     }
 }