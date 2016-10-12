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
            move(oSlide,this.offsetLeft+oSlideL-110);
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

    /*个人简介*/
    var oReferral = document.querySelector('.referral');
    var oR1 = document.querySelectorAll('.referral .r1');
    var oEm = document.querySelectorAll('.referral .r1 .r2 em');
    var aDiv = document.querySelectorAll('.referral .r1 .r2 div');
    var oMe = document.querySelector('.me');
    oMe.onclick = function(){
        for(var i=0; i<aDiv.length; i++){
            aDiv[i].style.height = 0;
            oEm[i].innerHTML = '+';
        }
    };
    for(var i=0; i<oR1.length; i++){
        var bOk = false;
        oR1[i].index = i;
        //添加鼠标移入事件
        oR1[i].onmouseenter = function(){
            for(var j=0; j<oR1.length; j++){
                oR1[j].style.background = '#203f5c';
            }
            this.style.background = '#07181c';
        };

        //添加点击事件
        aDiv[i].style.transition = '0.5s all ease';
        oR1[i].onclick = function(ev){
            var oEvent = ev || event;
            if(oEm[this.index].innerHTML == '+'){
                oEm[this.index].innerHTML = '-';
                aDiv[this.index].style.height = '300px';
            }else{
                oEm[this.index].innerHTML = '+';
                aDiv[this.index].style.height = 0;
            }
            oEvent.cancelBubble = true;
        };
    }
    /*弧表*/
    function d2a(n){
        return n*Math.PI/180;
    }
    function toDou(iNum){
        return iNum<10?'0'+iNum:''+iNum;
    }

    var oC = document.getElementById('c1');
    var gd = oC.getContext('2d');
    var cx =450,
        cy = 130;

    function clock(){
        gd.clearRect(0,0,oC.width,oC.height);
        var oDate = new Date();
        var h = oDate.getHours()%12;
        var m = oDate.getMinutes();
        var s = oDate.getSeconds();

        var str = toDou(h)+':'+toDou(m)+':'+toDou(s);
        gd.font = '20px 微软雅黑';
        gd.textAlign = 'center';
        gd.textBaseline = 'middle';
        gd.fillText(str,cx,cy);


        drawArc(60,0,h*30+m/60*30,'#f43267');
        drawArc(80,0,m*6+s/60*6,'aqua');
        drawArc(100,0,s*6,'#203f5c');
    }
    clock();
    setInterval(clock,1000);


    function drawArc(r,s,e,color){
        gd.beginPath();
        gd.arc(cx,cy,r,d2a(s-90),d2a(e-90),false);
        gd.lineWidth = 20;
        gd.strokeStyle = color;
        gd.stroke();
    }
});