'use strict';
window.onload=function(){
    var oList = document.querySelector('.nav .list');
    var oBlo = document.querySelector('.nav .blo');
    var oNav = document.querySelector('.top-box .nav');

    var bok = true;
   /* function fnEnd(){
        oList.removeEventListener('transitionend',fnEnd,false);
        oNav.style.borderBottom = 'none';
        oNav.style.boxShadow='none';
    }*/
    oBlo.onclick=function(){
        if(bok){
            oList.style.height = '600px';
            oList.style.transition = '1s all ease';
            bok = false;
        }else{
            bok = true;
            oList.style.height = '1px';
            /*oList.addEventListener('transitionend',fnEnd,false);*/

        }
    };
    /*window.onresize  = function(){
        if(document.documentElement.clientWidth>730){
            oNav.style.borderBottom = '0px solid #ca3131';
            oNav.style.boxShadow='0px 0px 0 rgba(255,255,255,0.3)';
        }

    }*/
};