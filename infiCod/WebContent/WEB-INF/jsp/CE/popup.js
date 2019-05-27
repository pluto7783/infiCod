document.getElementById("on").onclick = function(){
	chrome.runtime.sendMessage({check: "clickOn"}, function(response) {
		  /*if(response.check){
			  document.getElementById("on").style.backgroundColor = "black";
		  }else{
			  document.getElementById("on").style.backgroundColor = "white";
		  }*/
	});
}

document.getElementById("off").onclick = function(){
	chrome.runtime.sendMessage({check: "clickOff"}, function(response) {
		/*if(response.check){
			  document.getElementById("on").style.backgroundColor = "black";
		  }else{
			  document.getElementById("on").style.backgroundColor = "white";
		  }*/
	});
}

document.getElementById("removeIfr").onclick = function(){
	chrome.runtime.sendMessage({check: "removeIfr"}, function(response) {
		/*if(response.check){
			  document.getElementById("on").style.backgroundColor = "black";
		  }else{
			  document.getElementById("on").style.backgroundColor = "white";
		  }*/
	});
}

document.getElementById("removeImg").onclick = function(){
	chrome.runtime.sendMessage({check: "removeImg"}, function(response) {
		/*if(response.check){
			  document.getElementById("on").style.backgroundColor = "black";
		  }else{
			  document.getElementById("on").style.backgroundColor = "white";
		  }*/
	});
} 