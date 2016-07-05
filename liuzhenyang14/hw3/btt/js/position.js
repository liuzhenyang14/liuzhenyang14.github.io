function BackToTop() {
	BackToTop.prototype.init = function(){
		var Button = document.getElementById('backtotop');
		if (arguments[0].x != undefined && arguments[0].y != undefined){
			var x = arguments[0].x;
			var y = arguments[0].y;
			var sx = x.toString();
			var sy = y.toString();
			Button.style.cssText = Button.style.cssText + 'left:' + sx + 'px;';
			Button.style.cssText = Button.style.cssText + 'top:' + sy + 'px;';
			console.log(Button.style.cssText);
 		}
 		if (arguments[0].LeftUp == true){
			Button.style.cssText = Button.style.cssText + 'left:' + '0px;';
			Button.style.cssText = Button.style.cssText + 'top:' + '0px;';
 		}
 		if (arguments[0].LeftDown == true){
			Button.style.cssText = Button.style.cssText + 'left:' + '0px;';
			Button.style.cssText = Button.style.cssText + 'bottom:' + '0px;';
 		}
 		if (arguments[0].RightUp == true){
			Button.style.cssText = Button.style.cssText + 'right:' + '0px;';
			Button.style.cssText = Button.style.cssText + 'top:' + '0px;';
 		}
 		if (arguments[0].RightDown == true){
			Button.style.cssText = Button.style.cssText + 'right:' + '0px;';
			Button.style.cssText = Button.style.cssText + 'bottom:' + '0px;';
 		}
	}
}

var btn = new BackToTop();
btn.init({RightDown:true});