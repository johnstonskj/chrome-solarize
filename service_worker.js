chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({theme: chrome.i18n.getMessage("theme_light")}, function() {
    	console.log("Theme set to light.");
  	});
});