// listen for our browserAction to be clicked
chrome.browserAction.onClicked.addListener(deactivate);
chrome.browserAction.onClicked.addListener(activate);


function deactivate(tab) {
	//chrome.browserAction.removeListener(deactivate),
	// set icon to gray
	chrome.browserAction.setIcon({path:"nobatt.png"}),
	// chrome.browserAction.disable,
	// chrome.browserAction.onClicked.removeListener(deactivate),
	
}

function activate(tab) {
	chrome.browserAction.setIcon({path:"battery-on.png"}),
	chrome.browserAction.enable,
	chrome.browserAction.onClicked.removeListener(activate)
}
