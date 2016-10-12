'use strict';
function jsonp(json){
	json = json||{};
	if(!json.url)return;
	json.cbName = json.cbName||'cb';
	json.data = json.data||{};
	json.timeout = json.timeout||10000;
	var timer = null;


	json.data[json.cbName] = 'show'+Math.random();
	json.data[json.cbName] = json.data[json.cbName].replace('.','');


	var arr = [];
	for(var name in json.data){
		arr.push(name+'='+encodeURIComponent(json.data[name]));
	}
	var str = arr.join('&');
	
	window[json.data[json.cbName]]=function(result){
		json.success&&json.success(result);
		clearTimeout(timer);
		
	};
	var oH = document.getElementsByTagName('head')[0];
	var oS = document.createElement('script');
	oS.src=json.url+'?'+str;
	oH.appendChild(oS);
	timer = setTimeout(function(){
		window[json.data[json.cbName]]=null;
		json.error&&json.error('请求超时');
	},json.timeout);
}








