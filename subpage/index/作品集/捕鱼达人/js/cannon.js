'use strict'
var CANNON_SIZE = [
	null,
	{w:74,h:74},
	{w:74,h:76},
	{w:74,h:76},
	{w:74,h:83},
	{w:74,h:85},
	{w:74,h:90},
	{w:74,h:94}
];
function Cannon(images,type){
	Sprite.call(this,images['cannon'+type]);
	this.w = CANNON_SIZE[type].w;
	this.h = CANNON_SIZE[type].h;
	this.type = type;
}
Cannon.prototype = new Sprite();
Cannon.prototype.constructor = Cannon;