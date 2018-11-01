
/**
 * 创建actions
 */
import { CHANGE_ISICON } from './mutations.js'
 
 export default {
     changeIsicon( { commit }, isIcon) {
         commit({
             type: 'CHANGE_ISICON',      //字符串
             isIcon,
         })
     }
 }