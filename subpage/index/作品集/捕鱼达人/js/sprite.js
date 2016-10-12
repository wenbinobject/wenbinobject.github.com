'use strict'
function Sprite(img){
	this.img = img; 			//物体的图片
	this.x = 0; 				//canvas中的位置
	this.y = 0; 				//canvas中的位置
	this.sx = 0; 				//原图中的位置
	this.sy = 0; 				//原图中的位置
	this.w = 0; 				//物体宽度
	this.h = 0; 				//物体高度
	this.r = 0; 				//物体角度
	this.iSpeed = 0; 			//物体速度
}
Sprite.prototype.draw = function(gd){
	gd.save();
	gd.beginPath();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.r));
	gd.drawImage(
		this.img,
		this.sx,this.sy,this.w,this.h,
		-this.w/2,-this.h/2,this.w,this.h
	);
	gd.restore();
};
Sprite.prototype.move = function(){
	//最简单
	var iSpeedX = Math.sin(d2a(this.r))*this.iSpeed;
	var iSpeedY = -Math.cos(d2a(this.r))*this.iSpeed;
	this.x+=iSpeedX;
	this.y+=iSpeedY;
};
Sprite.prototype.collTest = function(obj){
	var a = this.x-obj.x;
	var b = this.y-obj.y;
	
	var dis = Math.sqrt(a*a+b*b);
	if(dis<30){
		return true;
	}else{
		return false;
	}
};
















