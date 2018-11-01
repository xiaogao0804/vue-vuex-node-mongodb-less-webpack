/**
 * 创建mutation
 */
 const CHANGE_ISICON = 'CHANGE_ISICON'   //用常量代替事件类型，使得代码更清新

 export default {
     //改变tab数字isIcon
     [CHANGE_ISICON] (state, isIcon) {
         state.isIcon = isIcon
         console.log('s', state.isIcon)
     }
 }


