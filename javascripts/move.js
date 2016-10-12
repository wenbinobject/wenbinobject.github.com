function move(obj,target){
	var iSpeed = 0;
	var left = obj.offsetLeft;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		left+=iSpeed;
		iSpeed+=(target-obj.offsetLeft)/7;
		iSpeed*=0.6;
		obj.style.left = left+'px';
		if(Math.round(left) == target&&Math.round(iSpeed)==0){
			clearInterval(obj.timer);
		}
	},30);
}