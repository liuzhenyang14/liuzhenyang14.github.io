function my_section() {
	if (typeof arguments[0] == "string"){
		
		if (arguments[0][0] == '#') {
			var para = arguments[0].slice(1);
			this.element = document.getElementById(para);
			
		}
		else if (arguments[0][0] == '.') {
			var para = arguments[0].slice(1);
			this.element = document.getElementsByClassName(para);
		}
		else{
			var para = arguments[0];
			this.element = document.getElementsByTagName(para);

		}
		return this.element;
	}
	else{
		return [];
	}
}

//console.log(my_section("div"));