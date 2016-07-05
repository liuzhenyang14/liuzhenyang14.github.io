function my_section() {
	if (arguments[0][0] === '#') {
		var para = arguments[0].slice(1);
		this.element = document.getElementById(para);
	}
	else if (arguments[0][0] === '.') {
		var para = arguments[0].slice(1);
		this.element = document.getElementsByClassName(para);
	}
	else{
		var para = arguments[0];
		this.element = document.getElementsByTagName(para);
	}
	this.element.attr = function(){
		if (typeof arguments[1] == 'undefined'){
			return this.getAttribute(arguments[0]);
		}
		else{
			this.setAttribute(arguments[0], arguments[1]);
			return 'ok';
		}
	}

	if(this.element.length === 1){
		return this.element[0];
	}
	else{
		for (var i = 0; i < this.element.length; i++) {
			this.element[i].attr = function(){
				if (typeof arguments[1] == 'undefined'){
					return this.getAttribute(arguments[0]);
				}
				else{
					this.setAttribute(arguments[0], arguments[1]);
					return 'ok';
				}
			}
		}
		return this.element;
	}
}