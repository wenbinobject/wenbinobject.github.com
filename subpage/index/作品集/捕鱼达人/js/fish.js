'use strict'
var FISH_SIZE = [
	null,
	{w:37,h:55},
	{w:64,h:78},
	{w:56,h:72},
	{w:59,h:77},
	{w:122,h:107}
];
function Fish(images,type){
	Sprite.call(this,images['fish'+type]);
	this.w = FISH_SIZE[type].w;
	this.h = FISH_SIZE[type].h;
	this.iSpeed = 3;
	this.type = type;
}
Fish.prototype = new Sprite();
Fish.prototype.constructor = Fish;
Fish.prototype.swim = function(){
	this.sx+=this.w;
	this.sx = this.sx%(this.w*4);
};










