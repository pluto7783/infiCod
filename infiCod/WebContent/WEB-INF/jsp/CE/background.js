//chrome.browserAction.onClicked.addListener(
//	function (tab) {
//		chrome.tabs.executeScript(null, { file: "jquery-3.4.1.min.js" }, function() {
//		    chrome.tabs.executeScript(null, { file: "inject.js" });
//		});
//	}
//)
var enable=false;
/*chrome.storage.local.set({"foo":"woo"},function(){
});*/
console.log(123)

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.check == "on")
      sendResponse({check: enable});
});

chrome.browserAction.onClicked.addListener(function (tab) {
	enable = enable ? false : true;
	if(enable){
	//turn on...
		chrome.browserAction.setIcon({ path: 'iconon.png' });
		chrome.browserAction.setBadgeText({ text: 'ON' });
		console.log("on/off :"+enable)
	}else{
	//turn off...
		chrome.browserAction.setIcon({ path: 'iconoff.png'});
		chrome.browserAction.setBadgeText({ text: 'OFF' });
		console.log("on/off :"+enable)
	}
});