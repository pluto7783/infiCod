function onLoadFuc(){
	console.log("===== ifr.js 11 =====")
}

var img = document.getElementsByTagName("img");
var imglength = img.length;
for (var i = 0; i < imglength; i++){
	img[0].remove();
}

window.onload = onLoadFuc;
