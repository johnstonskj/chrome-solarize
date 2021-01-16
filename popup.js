/**
 This file contains click listeners or event handlers of elements in popup.html
 You can add the logic to take some action on particular event
*/

let toggleTheme = document.getElementById('toggleTheme');

// A11y...
toggleTheme.tabIndex = 0;
toggleTheme.focus();

chrome.storage.sync.get("theme", function(data) {
	if (data.theme === chrome.i18n.getMessage("theme_light")) {
		toggleTheme.setAttribute("value", chrome.i18n.getMessage("theme_dark"));
	} else {
		toggleTheme.setAttribute("value", chrome.i18n.getMessage("theme_light"))
	}
});

toggleTheme.onclick = function(element) {
	const newTheme = toggleTheme.getAttribute("value");
	chrome.storage.sync.set({theme: newTheme}, function() {
    	console.log("Theme set to " + newTheme + ".");
  	});
  	window.close();
};