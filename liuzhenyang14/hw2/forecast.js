var power = {
	"Switzerland":0,
	"Poland":0,
	"Welsh":0,
	"Northern_Ireland":0,
	"Croatia":0,
	"Portugal":0,
	"France":0,
	"Ireland":0,
	"Germany":0,
	"Slovakia":0,
	"Hungary":0,
	"Belgium":0,
	"Italy":0,
	"Spain":0,
	"England":0,
	"Iceland":0
}

var country = [
	"Switzerland",
	"Poland",
	"Welsh",
	"Northern_Ireland",
	"Croatia",
	"Portugal",
	"France",
	"Ireland",
	"Germany",
	"Slovakia",
	"Hungary",
	"Belgium",
	"Italy",
	"Spain",
	"England",
	"Iceland"
]

function chance(){
	var w_p = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var i, j;
	//最初始的结点，只有该点对应的国家胜率为1
	if (arguments.length == 1){
		for(i = 0; i < 16; i++){
			if (arguments[0] == country[i])
				w_p[i] = 1;
		}
		return w_p;
	}
	//比赛结点，计算与该点有关的每个球队的胜率
	if (arguments.length == 3){
		var w_p1 = arguments[0];
		var w_p2 = arguments[1];
		for(i = 0; i < 16; i++){
			for (j = 0; j < 16; j++) {
				if (i != j){
					if (power[country[i]] == 0 && power[country[j]] == 0){
						w_p[i] = w_p[i] + w_p1[i] * (w_p2[j] * 0.5);
						w_p[j] = w_p[j] + w_p2[j] * (w_p1[i] * 0.5);
					}
					else{
						w_p[i] = w_p[i] + w_p1[i] * (w_p2[j] * (power[country[i]]/(power[country[i]] + power[country[j]])));
						w_p[j] = w_p[j] + w_p2[j] * (w_p1[i] * (power[country[j]]/(power[country[i]] + power[country[j]])));
					}
				}
			}
		}
		return w_p;
	}
}

function forecast(data, countrys) {
	var result = chance(chance(chance(chance(chance("Switzerland"), chance("Poland"),data)  , chance(chance("Welsh")  , chance("Northern_Ireland"),data), data),
		  		        chance(chance(chance("Croatia")    , chance("Portugal"),data), chance(chance("France") , chance("Ireland"),data)   ,data), data),
		         chance(chance(chance(chance("Germany")    , chance("Slovakia"),data), chance(chance("Hungary"), chance("Belgium"),data)   ,data),
		  		        chance(chance(chance("Italy")      , chance("Spain")   ,data), chance(chance("England"), chance("Iceland"),data)   ,data), data), data);
	for (var i = 0; i < 16; i++) {
		if (countrys == country[i])
			return result[i];
	}
}

alert(forecast(power, "Poland"));