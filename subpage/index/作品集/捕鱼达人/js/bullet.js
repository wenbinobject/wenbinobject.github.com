'use strict'
var BULLET_SIZE = [
	null,
	{sx:86,sy:0,w:24,h:26},
	{sx:61,sy:0,w:25,h:29},
	{sx:32,sy:35,w:27,h:31},
	{sx:30,sy:82,w:29,h:33},
	{sx:0,sy:82,w:30,h:34},
	{sx:30,sy:0,w:31,h:35},
	{sx:0,sy:44,w:32,h:38}
];
function Bullet(img,type){
	Sprite.call(this,img);
	
	this.sx = BULLET_SIZE[type].sx;
	this.sy = BULLET_SIZE[type].sy;
	this.w = BULLET_SIZE[type].w;
	this.h = BULLET_SIZE[type].h;
	
	this.iSpeed = 6;
}
Bullet.prototype = new Sprite();
Bullet.prototype.constructor = Bullet;