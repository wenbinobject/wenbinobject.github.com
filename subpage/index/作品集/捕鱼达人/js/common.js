'use strict'
function loadImages(json,fn){
	var loaded = 0;
	var total = 0;
	var result = {};
	for(var key in json){
		total++;
		var oImg = new Image();
		oImg.src = json[key];
		result[key] = oImg;
		oImg.onload = function(){
			loaded++;
			if(loaded==total){
				fn&&fn(result);
			}
		};
	}
}

function d2a(n){
	return n*Math.PI/180;
}

function a2d(n){
	return n*180/Math.PI;
}

function rnd(n,m){
	return Math.floor(Math.random()*(m-n)+n);
}













