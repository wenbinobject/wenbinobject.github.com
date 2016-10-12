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
            move(oSlide,this.offsetLeft+oSlideL);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#fff';
            }
            this.style.color='#befdff';
        };
        aLiNav[i].onmouseout = function(){
            move(oSlide,oSlideL);
            for(var j=0; j<aLiNav.length; j++){
                aLiNav[j].style.color='#fff';
            }
            aLiNav[0].style.color='#befdff';
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
    //全屏
    var oShip = document.querySelector('.screen .screen-z .ship');
    var oShipImg = document.querySelector('.screen .screen-z .ship img');
    var oShip1 = document.querySelector('.screen .screen-z .ship .ship-1');
    var productA = document.querySelectorAll('.product .product-content ul li a');
    var productSpan = document.querySelectorAll('.product .product-content ul li span');
    var productAImg = document.querySelectorAll('.product .product-content ul li a img');
    for(var i=0; i<productA.length; i++){
        productA[i].index = i;
        productA[i].onmouseenter = function(){
            for(var j=0; j<productA.length; j++){
                productSpan[j].style.opacity = 0;
            }
            productSpan[this.index].style.opacity = 1;
        };
        productA[i].onmouseleave = function(){
            for(var j=0; j<productA.length; j++){
                productSpan[j].style.opacity = 0;
            }
        }
    }
    /*个人简介，项目作品*/
    var oGrjj = document.querySelector('.grjj');
    var aGrdiv = document.querySelectorAll('.grjj div');
    var aGrspan = document.querySelectorAll('.grjj div span');
    for(var i=0; i<aGrdiv.length; i++){
        aGrdiv[i].index = i;
        aGrspan[i].style.transition = '0.3s all ease';
        aGrdiv[i].onmouseenter = function(){
            aGrspan[this.index].style.left = 0;
        };
        aGrdiv[i].onmouseleave = function(){
            aGrspan[this.index].style.left = '-152px';
        };
    }
});