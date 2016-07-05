window.onload = function(){
    var Button = document.getElementById('button');
    var Modal = document.getElementById('pic');
    var closekey = 27;
    var draggable = true;
    var m_down = false;
    var posx;
    var posy;
    var posx1;
    var posy1;
    var posx2;
    var posy2;
    Modal.init = function(){
        if(arguments[0].content != undefined){
            Modal.innerText = arguments[0].content;
        }
        if(arguments[0].closeKey != undefined){
            closekey = arguments[0].closeKey;
        }
        if(arguments[0].draggable != undefined && !arguments[0].draggable){
            draggable = false;
        }
    } 
	//Modal.init({draggable:false});
    Modal.style.left = "233px";
    Modal.style.top = "233px";
    Modal.style.display = "none";
    Button.onclick = function(){
         Modal.style.display = "block";
    }
    document.onkeydown = function(e){
        if(e.keyCode === closekey){
            Modal.style.display = "none";
        }  
    }  
    if(draggable == true){
       	Modal.onmousedown = function(e){
           m_down = true;
           posx = e.clientX;
           posy = e.clientY;
           posx2 = parseInt(Modal.style.left);
           posy2 = parseInt(Modal.style.top);
       	}; 
       	Modal.onmouseup = function(e){
        	m_down = false;
   		};
    	Modal.onmouseout = function(e){
        	m_down = false;
    	};
    	Modal.onmousemove = function(e){
        	if(m_down == true){
            	posx1 = e.clientX;
            	posy1 = e.clientY;
            	Modal.style.left = posx2 + posx1 - posx + "px";
            	Modal.style.top = posy2 + posy1 - posy + "px";
        	};
    	}  
    }
    
}