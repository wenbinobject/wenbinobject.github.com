'use strict';
$(function(){
    //鼠标移入微信
    $('.nav_top .codeBox').bind('mouseover',function() {
        $('.nav_top .codeBox .code').stop().animate({
            "top": 36
        });
    });
    //鼠标移出微信
    $('.nav_top .codeBox').bind('mouseout',function() {
        $('.nav_top .codeBox .code').stop().animate({
            "top": -100
        });
    });
    //导航条开始
    var aLiNav = document.querySelectorAll('.nav .nav_right li');
    var oSlide = document.querySelector('.slide');
    var oSlideL = oSlide.offsetLeft;
    for(var i = 0;i<aLiNav.length;i++){
        aLiNav[i].index =i;
        aLiNav[i].onmouseover = function(){
            move(oSlide,this.offsetLeft+oSlideL-330);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#333';
            }
            this.style.color='#fff';
        };
        aLiNav[i].onmouseout = function(){
            move(oSlide,oSlideL);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#333';
            }
            aLiNav[0].style.color='#fff';
        };
    }
    //头像旋转
    var oHead = document.querySelector('.nav .head');
    var oHeadS = document.querySelector('.nav .head span');
    oHead.style.WebkitTransform = 'rotate(360deg)';
    oHead.style.MozTransform = 'rotate(360deg)';
    oHead.style.mstransform = 'rotate(360deg)';
    oHead.style.transform = 'rotate(360deg)';
    oHead.onmouseover = function(){
        oHeadS.style.top = '65px';
    };
    oHead.onmouseout = function(){
        oHeadS.style.top = '95px';
    };
    /*show*/
    var oShowLi = document.querySelectorAll('.content .content-t .me .show ol li');
    var oPageUl = document.querySelector('.content .content-t .me .page ul');
    for(var i=0; i<oShowLi.length; i++){
        if((i+1)%3 == 0){
            oShowLi[i].style.marginRight = 0;
        }
    }
    for(var i=0; i<Math.ceil(oShowLi.length/9); i++){
        var oPageLi = document.createElement('li');
        oPageLi.innerHTML = i+1;
        oPageUl.appendChild(oPageLi);

    }
    /*作品鼠标划入效果*/
    function a2d(n){
        return n*180/Math.PI;
    }
    var oOl = document.querySelector('.content .content-t .me .show ol');
    var aLi = document.querySelectorAll('.content .content-t .me .show ol li');
    side(aLi);

    function hoverDir(obj, ev){
        var x=obj.offsetLeft+obj.offsetWidth/2-ev.clientX;
        var y=obj.offsetTop+obj.offsetHeight/2-ev.pageY;
        /*return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;*/
        return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
    }

    function side(scale){
        for(var i=0; i<scale.length; i++){
            scale[i].onmouseenter=function(ev){
                var oEvent=ev || event;
                var n=hoverDir(this,oEvent);
                var oSpan=this.children[1];
                switch(n){
                    case 0:
                        oSpan.style.left='311px';
                        oSpan.style.top=0;
                        break;
                    case 1:
                        oSpan.style.left=0;
                        oSpan.style.top='300px';
                        break;
                    case 2:
                        oSpan.style.left='-311px';
                        oSpan.style.top=0;
                        break;
                    case 3:
                        oSpan.style.left=0;
                        oSpan.style.top='-300px';
                        break;
                }
                move2(oSpan, {left: 0, top: 0});
            };
            scale[i].onmouseleave=function(ev){
                var oEvent=ev || event;
                var n=hoverDir(this, oEvent);

                var oSpan=this.children[1];
                switch(n){
                    case 0:
                        move2(oSpan, {left: 311, top: 0});
                        break;
                    case 1:
                        move2(oSpan, {left: 0, top: 300});
                        break;
                    case 2:
                        move2(oSpan, {left: -311, top: 0});
                        break;
                    case 3:
                        move2(oSpan, {left: 0, top: -300});
                        break;
                }
            };
        }
    }
    /*作品鼠标划入效果结束*/
    var aOlLi = document.querySelectorAll('.content .content-t .me .show ol li');
    var aPage = document.querySelectorAll('.content .content-t .me .page ul li');
    for(var j=0; j<aOlLi.length; j++){
        aOlLi[j].style.display = 'block';
    }
    aPage[0].style.background = '#666';
    for(var i=0; i<aPage.length; i++){
        aPage[i].index = i;
        aPage[i].onclick = function(){
            for(var j=0; j<aPage.length; j++){
                aPage[j].style.background = '#ccc';
            }
            this.style.background = '#666';
            for(var j=0; j<aOlLi.length; j++){
                if(j>=this.index*9 && j<(this.index*9+aOlLi.length)){
                    aOlLi[j].style.display = 'block';
                }else{
                    aOlLi[j].style.display = 'none';
                }
            }
        }
    }
});