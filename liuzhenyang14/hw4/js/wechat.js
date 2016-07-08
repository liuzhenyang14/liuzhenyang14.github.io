window.onload = function(){
	var my_url = "https://wall.cgcgbcbc.com";
	var my_socket = io.connect(my_url);
	var ad = document.getElementById("admin1");
	var time;

	var xhr = new XMLHttpRequest();
	var history;
	xhr.onreadystatechange = function(e){
		if (xhr.readyState == 4){
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				history = eval(xhr.responseText);
				BasicMessages(history[2]);
				BasicMessages(history[1]);
				BasicMessages(history[0]);
			}
			else{
				alert("Request was unsuccessful: " + xhr.status);
			}
		}
	}
	xhr.open("GET", "https://wall.cgcgbcbc.com/api/messages?num=3", true);
	xhr.send(null);

	function removeNode(e){
		var parEle = e.parentNode;
		if (parEle){
			parEle.removeChild(e);
		}
	}


	function BasicMessages(messages){
		var m1 = document.getElementById("foot");
		var m2 = document.getElementById("nav");
		var m3 = document.getElementById("top");
		m2.id = "top";
		m1.id = "nav";
		removeNode(m3);
		var n_box, n_pic, n_nickname, n_content;
		n_box = document.createElement("div");
		n_pic = document.createElement("div");
		n_nickname = document.createElement("div");
		n_content = document.createElement("div");
		n_box.id = "foot";
		n_pic.id = "pic";
		n_nickname.id = "nickname";
		n_content.id = "content";
		n_pic.style.backgroundImage = 'url' + '(' + messages.headimgurl + ')';
		n_nickname.innerText = messages.nickname;
		n_content.innerText = messages.content;
		document.getElementById("mbox").appendChild(n_box);
		document.getElementById("foot").appendChild(n_content);
		document.getElementById("foot").insertBefore(n_nickname, n_content);
		document.getElementById("foot").insertBefore(n_pic, n_nickname);	
	}

	

	function Admin(messages){
		
		ad.style.display = 'block';
		var contents = document.getElementById("admin2");
		contents.innerText = messages.content;
		clearTimeout(time);
		time = setTimeout(function(){
			ad.style.display = "none";
		}, 10000);
	}

	function AdminMessages(messages){
		Admin(messages);

	}

	my_socket.on("new message", function(messages){
		BasicMessages(messages);
	});

	my_socket.on("admin", function(messages){
		AdminMessages(messages);
	});
}