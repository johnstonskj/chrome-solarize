chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({theme: 'light'}, function() {
    	console.log("Theme set to light.");
  	});
});