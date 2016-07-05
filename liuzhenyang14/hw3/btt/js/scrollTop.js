function myEvent(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}
	else{
		obj.addEventListener(ev,fn,false);
	}
}

myEvent(window,'load',function(){
	var Button = document.getElementById('backtotop');
	var Height = document.documentElement.clientHeight;
	var timer = null;
	var scrollTop;
	window.onscroll = function(){
		scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop >= Height){
			Button.style.display = 'block';
		}
		else{
			Button.style.display = 'none';
		}
		return scrollTop;
	};	
	Button.onclick=function(){
		clearInterval(timer);
		timer = setInterval(function(){
			var now_height = scrollTop;
			var speed = now_height / 5;
			if(scrollTop == 0){
				clearInterval(timer);
			}
			document.documentElement.scrollTop = scrollTop - speed;
			document.body.scrollTop = scrollTop - speed;
		}, 10);
	}
	window.onkeydown = function(e){
		//回车键
		if (e.keyCode == 13){
			clearInterval(timer);
			timer = setInterval(function(){
				var now_height = scrollTop;
				var speed = now_height / 5;
				if(scrollTop == 0){
					clearInterval(timer);
				}
				document.documentElement.scrollTop = scrollTop - speed;
				document.body.scrollTop = scrollTop - speed;
			}, 10);
		}
	}
});

