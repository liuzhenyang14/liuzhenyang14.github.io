var info = [
	{
		name:"Rowing",
		age:233,
		hometown:'Stormwind'
	},
	{
		name:"Evilelf",
		age:233,
		hometown:'Darnassus'
	},
	{
		name:"Aslancyf",
		age:666,
		hometown:'Gilneas'
	},
	{
		name:"Riverfish",
		age:450,
		hometown:'Archerus'
	},
	{
		name:"Imanity",
		age:666,
		hometown:'Stormwind'
	}
]

function search() {
	if (typeof arguments[1] == "number"){
		var flag = false;
		var result = [];
		var i = 0, j = 0;
		for (i = 0; i < arguments[0].length; i++){
			if (arguments[0][i].age == arguments[1])
			{
				flag = true;
				result[j] = arguments[0][i];
				j++;
			}
		}
		if (flag)	
			return result;
		else
			return flag;
	}
	if (typeof arguments[1] == "string"){
		var flag = false;
		var result;
		var i = 0;
		for (i = 0; i < arguments[0].length; i++) {
			if (arguments[0][i].name == arguments[1]){
				flag = true;
				result = arguments[0][i];
				break;
			}
		}
		if (flag)	
			return result;
		else
			return flag;
	}
	if (typeof arguments[1] == "object"){
		var flag = false;
		var result = [];
		var i = 0, j = 0;
		for (i = 0; i < arguments[0].length; i++) {
			if ((!arguments[1].name && !arguments[1].age && !arguments[1].hometown) ||
				(arguments[0][i].name == arguments[1].name && !arguments[1].age && !arguments[1].hometown) || 
				(arguments[0][i].age == arguments[1].age && !arguments[1].name && !arguments[1].hometown) || 
				(arguments[0][i].hometown == arguments[1].hometown && !arguments[1].name && !arguments[1].age) ||
				(arguments[0][i].name == arguments[1].name && arguments[0][i].age == arguments[1].age && !arguments[1].hometown) ||
				(arguments[0][i].name == arguments[1].name && arguments[0][i].hometown == arguments[1].hometown && !arguments[1].age) ||
				(arguments[0][i].hometown == arguments[1].hometown && arguments[0][i].age == arguments[1].age && !arguments[1].name) ||
				(arguments[0][i].name == arguments[1].name && arguments[0][i].age == arguments[1].age && arguments[0][i].hometown == arguments[1].hometown)){
				flag = true;
				result[j] = arguments[0][i];
				j++;
			}
		}
		if (flag)	
			return result;
		else
			return flag;
	}
}

console.log(search(info, {}));