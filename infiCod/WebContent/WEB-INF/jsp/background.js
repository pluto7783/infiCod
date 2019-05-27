//http 링크가 걸린 a태그의 href 값을 #으로 치환
for (var i = 0; i <$("a").length;i++){
	var sp = $("a").eq(i);
	if(sp.attr("href")){
		if(sp.attr("href").indexOf("http")>-1){
			sp.attr("href","#");
        }
    }
}

//페이지 내 iframe 전부제거
var ifr = document.getElementsByTagName("iframe");
var ifrlength = ifr.length;
for (var i = 0; i < ifrlength; i++){
	ifr[0].remove();
}