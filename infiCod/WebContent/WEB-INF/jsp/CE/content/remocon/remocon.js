function onLoadFuc(){
	console.log("===== remocon.js 01 =====")
}

chrome.runtime.sendMessage({check: "remoteOn"}, function(response) {
	  if(!response.check){
		  if(document.getElementById("remoteConDiv")){
			  document.getElementById("remoteConDiv").remove();
		  }
		  return;
	  }
	  
	  if(response.check){
		  if(document.getElementById("remoteConDiv")){
			  document.getElementById("remoteConDiv").remove();
		  }
		  
		  function createElement(obj,propt){
			  var returnObj = document.createElement(obj);
			  
			  for ( var prt in propt){
				  if(typeof(propt[prt]) == "object"){
					  for(var pr in propt[prt]){
						  returnObj[prt][pr] = propt[prt][pr];
					  }
				  }else{
					  returnObj[prt] = propt[prt];
				  }
			  }
			  return returnObj;
		  }
		  
		  var div = createElement("div", {id:"remoteConDiv"
			  							, style:{width:"100px" ,height:"100px"
			  								    ,border:"1px solid black" ,position:"fixed"
			  								    ,bottom:"100px",right:"100px"}});
		  document.body.append(div)
	  }
});

window.onload = onLoadFuc;
