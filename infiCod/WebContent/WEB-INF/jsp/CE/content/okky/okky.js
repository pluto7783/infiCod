function onLoadFuc(){
	console.log("===== okky.js 15 =====")
}

chrome.runtime.sendMessage({check: "on"}, function(response) {
	  console.log(response.check);
	  if(response.check){
		  //오키광고삭제
		  $(".right-banner-wrapper").remove();
		  $(".main-banner-wrapper").remove();
		  $(".sidebar-category-nav").css("backgroundColor","#f8f8f8");
		  $(".sidebar").css("backgroundColor","#f8f8f8");
	  }
});

window.onload = onLoadFuc;
