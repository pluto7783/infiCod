function onLoadFuc(){
	console.log("===== img.js 11 =====")
}
/* TagName 셀렉터를 이용한 제거
var img = document.getElementsByTagName("img");
var imglength = img.length;
for (var i = 0; i < imglength; i++){
	img[0].remove();
}
*/

/**
 * querySelectAll 셀렉터를 이용한 제거 ;
 */
var img2 = document.querySelectorAll("img")
img2.forEach(function(img){
	img.remove();  
})

window.onload = onLoadFuc;
