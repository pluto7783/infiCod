function onLoadFuc(){
	console.log("===== remocon.js 01 =====")
}

chrome.runtime.sendMessage({check: "remoteOn"}, function(response) {
	  console.log(response.check);
	  
	  if(response.check){
		  
		  if(document.getElementById("remoteConDiv")){
			  document.getElementById("remoteConDiv").remove();
		  }
		  
		  var div = document.createElement("div");
		  div.id = "remoteConDiv"
		  div.style.width = "100px";
		  div.style.height = "100px";
		  div.style.border = "1px solid black";
		  div.style.position = "fixed";
		  div.style.bottom = "100px";
		  div.style.right = "100px";
		  
		  document.body.append(div)
		  
		  console.log("리모컨ON");
		  
	  }else{
		  if(document.getElementById("remoteConDiv")){
			  document.getElementById("remoteConDiv").remove();
		  }
		  console.log("리모컨OFF");
	  }
});

window.onload = onLoadFuc;
