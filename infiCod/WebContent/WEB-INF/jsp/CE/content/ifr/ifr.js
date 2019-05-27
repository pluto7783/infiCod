function onLoadFuc(){
	console.log("===== ifr.js 11 =====")
}

var ifr = document.getElementsByTagName("iframe");
var ifrlength = ifr.length;
for (var i = 0; i < ifrlength; i++){
	ifr[0].remove();
}

window.onload = onLoadFuc;
