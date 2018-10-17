/**
 * 适配
 */
function rem(doc, win){
        let docEl =doc.documentElement,  
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
    recalc = function(){  
       let clientWidth = docEl.clientWidth>750 ? 750 :docEl.clientWidth;  
        if (!clientWidth) {return};  
        docEl.style.fontSize = 100 * (clientWidth/750) + 'px';  
    };  
    recalc();  
    if (!doc.addEventListener) return;  
    win.addEventListener(resizeEvt, recalc, false);  
    doc.addEventListener('DOMContentLoaded', recalc, false);  
}

module.exports = {
    rem
}