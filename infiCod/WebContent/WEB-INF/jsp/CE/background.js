//chrome.browserAction.onClicked.addListener(
//	function (tab) {
//		chrome.tabs.executeScript(null, { file: "jquery-3.4.1.min.js" }, function() {
//		    chrome.tabs.executeScript(null, { file: "inject.js" });
//		});
//	}
//)
var enable=true;
/*chrome.storage.local.set({"foo":"woo"},function(){
	console.log(123)
});*/

chrome.browserAction.onClicked.addListener(function (tab) {
	enable = enable ? false : true;
	if(enable){
	//turn on...
		chrome.browserAction.setIcon({ path: 'iconon.png' });
		chrome.browserAction.setBadgeText({ text: 'ON' });
//		chrome.storage.local.set({"on":"on"},function(){
//			chrome.tabs.executeScript({code : 'var chromeExtensionActiveVal = true'}); 
//		});
	}else{
	//turn off...
		chrome.browserAction.setIcon({ path: 'iconoff.png'});
		chrome.browserAction.setBadgeText({ text: 'OFF' });
//		chrome.storage.local.set({"on":"off"},function(){
//			chrome.tabs.executeScript({code : 'var chromeExtensionActiveVal = false'}); 
//		});
	}
});