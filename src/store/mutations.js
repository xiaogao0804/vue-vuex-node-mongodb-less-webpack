/**
 * 创建mutation
 */
 const CHANGE_TABNUM = 'CHANGE_TABNUM'   //用常量代替事件类型，使得代码更清新

 export default {
     //改变tab数字isIcon
     [CHANGE_TABNUM] (state, isIcon) {
         state.isIcon = isIcon
     }
 }


